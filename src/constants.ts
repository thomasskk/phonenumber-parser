export const MIN_LENGTH_FOR_NSN = 2
export const MAX_LENGTH_FOR_NSN = 17
export const MAX_LENGTH_COUNTRY_CODE = 3
export const VALID_DIGITS = '0-9'
export const VALID_PUNCTUATION = `-/.()~ `
export const PLUS_CHARS = '+'
export const NON_FIXED_LINE_PHONE_TYPES = [
  'mobile',
  'premiumRate',
  'tollFree',
  'sharedCost',
  'voip',
  'personalNumber',
  'pager',
  'uan',
  'voicemail',
] as const
export const FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/
export const PHONE_NUMBER_TYPES = [
  'premiumRate',
  'tollFree',
  'sharedCost',
  'voip',
  'personalNumber',
  'pager',
  'uan',
  'voicemail',
  'fixedLine',
  'mobile',
] as const

export const MAX_INPUT_STRING_LENGTH = 250
export const CALLING_CODE_REG_EXP = /^\d+$/
export const DEFAULT_EXT_PREFIX = ' ext. '
export const RFC3966_EXTN_PREFIX = ';ext='
