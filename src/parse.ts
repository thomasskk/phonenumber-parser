import { checkNumberLengthForType } from './checkNumberLengthForType.js'
import { MIN_LENGTH_FOR_NSN, MAX_LENGTH_FOR_NSN } from './constants.js'
import { extractCountryCode } from './extractCountryCode.js'
import { extractExtension } from './extractExtension.js'
import { extractFormattedPhoneNumberFromPossibleRfc3966NumberUri } from './extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js'
import { extractNationalNumber } from './extractNationalNumber.js'
import { format } from './format.js'
import { getNumberType } from './getCountryByNationalNumber.js'
import { matchesEntirely } from './matchesEntirely.js'
import { getPlanMetadata, getExactCountry } from './metadata.js'

const isViablePhoneNumber = (number: string): boolean =>
  number.length >= MIN_LENGTH_FOR_NSN

export const parseInput = (text: string): { ext?: string; number?: string } => {
  const number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text)
  if (!number) return {}

  if (!isViablePhoneNumber(number)) return {}

  const withExtensionStripped = extractExtension(number)

  if (withExtensionStripped) return withExtensionStripped

  return { number }
}

export const parse = (
  text: string
): {
  country?: string
  countryCode: string
  phone: string
  national: string
  international: string
  RFC3966: string
  E164: string
  possible: boolean
  valid: boolean
  type?: string
  ext?: string
} => {
  const { number: formattedPhoneNumber, ext } = parseInput(text)

  if (!formattedPhoneNumber) {
    throw new Error('Invalid phone number')
  }

  const { countryCode, number } = extractCountryCode(
    parseIncompletePhoneNumber(formattedPhoneNumber)
  )

  if (!countryCode || !number) {
    throw new Error('Invalid phone number')
  }

  const planMetadata = getPlanMetadata({
    countryCode,
  })

  const nationalNumber = extractNationalNumber(
    parseIncompletePhoneNumber(number),
    getPlanMetadata({
      countryCode,
    })
  )

  if (
    nationalNumber.length < MIN_LENGTH_FOR_NSN ||
    nationalNumber.length > MAX_LENGTH_FOR_NSN
  ) {
    throw new Error('Invalid phone number')
  }

  const national = format({
    countryCode,
    nationalNumber,
    planMetadata,
    format: 'NATIONAL',
  })

  const international = format({
    countryCode,
    nationalNumber,
    planMetadata,
    format: 'INTERNATIONAL',
  })

  const E164 = format({
    countryCode,
    nationalNumber,
    planMetadata,
    format: 'E.164',
  })

  const RFC3966 = format({
    countryCode,
    nationalNumber,
    planMetadata,
    format: 'RFC3966',
  })

  const { country, countryMetadata } = getExactCountry(
    countryCode,
    nationalNumber
  )

  const numberType = countryMetadata
    ? getNumberType({ nationalNumber, countryMetadata })
    : undefined

  const isValid = !countryMetadata
    ? false
    : numberType !== undefined ||
      matchesEntirely(
        nationalNumber,
        countryMetadata.generalDesc.nationalNumberPattern
      )

  const isPossible = countryMetadata
    ? checkNumberLengthForType(nationalNumber, countryMetadata) ===
      'IS_POSSIBLE'
    : false

  return {
    country,
    phone: number,
    countryCode,
    international,
    national,
    E164,
    RFC3966,
    possible: isPossible,
    valid: isValid,
    type: numberType,
    ext,
  }
}

const isSingleDigit = (s: string): boolean => {
  const charCode = s.charCodeAt(0)
  return charCode >= 48 && charCode <= 57
}

export const parseIncompletePhoneNumber = (str?: string): string => {
  let result = ''
  if (!str) return result
  for (const character of str.split('')) {
    if ((character === '+' && !result) || isSingleDigit(character)) {
      result += character
    }
  }
  return result
}
