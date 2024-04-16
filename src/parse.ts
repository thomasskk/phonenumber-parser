import { checkNumberLengthForType } from './checkNumberLengthForType.js'
import { MIN_LENGTH_FOR_NSN, MAX_LENGTH_FOR_NSN } from './constants.js'
import { extractCountryCallingCode } from './extractCountryCallingCode.js'
import { extractExtension } from './extractExtension.js'
import { extractFormattedPhoneNumberFromPossibleRfc3966NumberUri } from './extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js'
import { extractNationalNumber } from './extractNationalNumber.js'
import { getNumberType } from './getCountryByNationalNumber.js'
import { matchesEntirely } from './matchesEntirely.js'
import { Metadata } from './metadata.js'
import { getMetadata } from './utils.js'

const isViablePhoneNumber = (number: string): boolean =>
  number.length >= MIN_LENGTH_FOR_NSN

const parseInput = (text: string): { ext?: string; number?: string } => {
  const number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text)
  if (!number) return {}

  if (!isViablePhoneNumber(number)) {
    return {}
  }
  const withExtensionStripped = extractExtension(number)
  if (withExtensionStripped) {
    return withExtensionStripped
  }
  return { number }
}

const metadata = new Metadata(getMetadata())

export const parse = (
  text: string
): {
  country?: string
  phone: string
  countryCallingCode: string
  number: string
  nationalNumber: string
  carrierCode?: string
  possible: boolean
  valid: boolean
  type?: string
  ext?: string
} => {
  const { number: formattedPhoneNumber, ext } = parseInput(text)

  if (!formattedPhoneNumber) {
    throw new Error('Invalid phone number')
  }

  const { countryCallingCode, number } = extractCountryCallingCode(
    parseIncompletePhoneNumber(formattedPhoneNumber),
    metadata
  )

  if (!countryCallingCode) {
    throw new Error()
  }

  const nationalNumber = extractNationalNumber(
    parseIncompletePhoneNumber(number),
    metadata.getPlanMetadata({
      callingCode: countryCallingCode,
    })
  )

  const { country, countryMetadata } = metadata.getExactCountry(
    countryCallingCode,
    nationalNumber
  )

  if (
    !nationalNumber ||
    nationalNumber.length < MIN_LENGTH_FOR_NSN ||
    nationalNumber.length > MAX_LENGTH_FOR_NSN
  ) {
    throw new Error()
  }

  const numberType = countryMetadata
    ? getNumberType({ nationalNumber, countryMetadata })
    : undefined

  const isValid = () => {
    if (!countryMetadata) return false

    return (
      numberType !== undefined ||
      matchesEntirely(
        nationalNumber,
        countryMetadata.generalDesc.nationalNumberPattern
      )
    )
  }

  return {
    country,
    phone: nationalNumber,
    countryCallingCode,
    number: `+${countryCallingCode}${nationalNumber}`,
    nationalNumber,
    possible: countryMetadata
      ? checkNumberLengthForType(nationalNumber, countryMetadata) ===
        'IS_POSSIBLE'
      : false,
    valid: isValid(),
    type: numberType,
    ext,
  }
}

const isSingleDigit = (s: string): boolean => {
  const charCode = s.charCodeAt(0)
  return charCode >= 48 && charCode <= 57
}

const parseIncompletePhoneNumber = (str?: string): string => {
  let result = ''
  if (!str) return result
  for (const character of str.split('')) {
    if ((character === '+' && !result) || isSingleDigit(character)) {
      result += character
    }
  }
  return result
}
