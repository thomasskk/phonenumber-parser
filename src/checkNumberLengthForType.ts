import { getPhoneNumberTypes } from './getPhoneNumberTypes.js'
import { getPossibleLenghts } from './getPossibleLenghts.js'
import { Territory } from './schema.js'
import { PhoneNumberType } from './types.js'

type NumberLengthType =
  | 'TOO_SHORT'
  | 'TOO_LONG'
  | 'IS_POSSIBLE'
  | 'INVALID_LENGTH'

export const checkNumberLengthForType = (
  nationalNumber: string,
  planMetadata: Territory,
  type?: PhoneNumberType
): NumberLengthType => {
  const types = getPhoneNumberTypes(planMetadata)
  const type_info = type ? types[type] : undefined

  const possibleLengths =
    type_info?.possibleLengths || getPossibleLenghts(planMetadata)

  if (type && !type_info) {
    return 'INVALID_LENGTH'
  }

  const actual_length = nationalNumber.length
  const minimum_length = possibleLengths[0]

  if (minimum_length === actual_length) {
    return 'IS_POSSIBLE'
  }

  if (minimum_length > actual_length) {
    return 'TOO_SHORT'
  }

  if (possibleLengths[possibleLengths.length - 1] < actual_length) {
    return 'TOO_LONG'
  }

  return possibleLengths.indexOf(actual_length, 1) >= 0
    ? 'IS_POSSIBLE'
    : 'INVALID_LENGTH'
}
