import { NON_FIXED_LINE_PHONE_TYPES } from './constants.js'
import { getPhoneNumberTypes } from './generate.js'
import { matchesEntirely } from './matchesEntirely.js'
import { Territory } from './schema.js'
import { PhoneNumberType } from './types.js'

export const getNumberType = ({
  nationalNumber,
  countryMetadata,
}: {
  nationalNumber: string
  countryMetadata: Territory
}): PhoneNumberType | 'fixedLineOrMobile' | undefined => {
  const phoneNumberTypesData = getPhoneNumberTypes(countryMetadata)
  const nationalNumberPattern =
    countryMetadata.generalDesc.nationalNumberPattern

  if (Object.keys(phoneNumberTypesData).length === 0) {
    return
  }

  if (!matchesEntirely(nationalNumber, nationalNumberPattern)) {
    return
  }

  if (isNumberTypeEqualTo(nationalNumber, phoneNumberTypesData['fixedLine'])) {
    if (phoneNumberTypesData['mobile'].pattern === '') {
      return 'fixedLineOrMobile'
    }

    if (!phoneNumberTypesData['mobile']) {
      return 'fixedLineOrMobile'
    }

    if (isNumberTypeEqualTo(nationalNumber, phoneNumberTypesData['mobile'])) {
      return 'fixedLineOrMobile'
    }

    return 'fixedLine'
  }

  for (const type of NON_FIXED_LINE_PHONE_TYPES) {
    if (isNumberTypeEqualTo(nationalNumber, phoneNumberTypesData[type])) {
      return type
    }
  }
}

export const isNumberTypeEqualTo = (
  nationalNumber: string,
  typeData?: { pattern: string; possibleLengths: number[] }
): boolean => {
  if (!typeData) return false
  const { pattern, possibleLengths } = typeData
  if (!possibleLengths.includes(nationalNumber.length)) return false
  return matchesEntirely(nationalNumber, pattern)
}
