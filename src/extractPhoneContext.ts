import { VALID_DIGITS } from './constants.js'

export const PLUS_SIGN = '+'

const RFC3966_VISUAL_SEPARATOR_ = '[\\-\\.\\(\\)]?'

const RFC3966_PHONE_DIGIT_ =
  '(' + '[' + VALID_DIGITS + ']' + '|' + RFC3966_VISUAL_SEPARATOR_ + ')'

const RFC3966_GLOBAL_NUMBER_DIGITS_ =
  '^' +
  '\\' +
  PLUS_SIGN +
  RFC3966_PHONE_DIGIT_ +
  '*' +
  '[' +
  VALID_DIGITS +
  ']' +
  RFC3966_PHONE_DIGIT_ +
  '*' +
  '$'

const RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(
  RFC3966_GLOBAL_NUMBER_DIGITS_,
  'g'
)

const ALPHANUM_ = VALID_DIGITS

const RFC3966_DOMAINLABEL_ = '[' + ALPHANUM_ + ']+((\\-)*[' + ALPHANUM_ + '])*'

const VALID_ALPHA_ = 'a-zA-Z'
const RFC3966_TOPLABEL_ = '[' + VALID_ALPHA_ + ']+((\\-)*[' + ALPHANUM_ + '])*'

const RFC3966_DOMAINNAME_ =
  '^(' + RFC3966_DOMAINLABEL_ + '\\.)*' + RFC3966_TOPLABEL_ + '\\.?$'

const RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, 'g')

export const RFC3966_PREFIX_ = 'tel:'
export const RFC3966_PHONE_CONTEXT_ = ';phone-context='
export const RFC3966_ISDN_SUBADDRESS_ = ';isub='

export const extractPhoneContext = (numberToExtractFrom: string) => {
  const indexOfPhoneContext = numberToExtractFrom.indexOf(
    RFC3966_PHONE_CONTEXT_
  )
  if (indexOfPhoneContext < 0) {
    return null
  }

  const phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length
  if (phoneContextStart >= numberToExtractFrom.length) {
    return ''
  }

  const phoneContextEnd = numberToExtractFrom.indexOf(';', phoneContextStart)
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd)
  } else {
    return numberToExtractFrom.substring(phoneContextStart)
  }
}

export const isPhoneContextValid = (phoneContext: string | null) => {
  if (phoneContext === null) {
    return true
  }

  if (phoneContext.length === 0) {
    return false
  }

  return (
    RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) ||
    RFC3966_DOMAINNAME_PATTERN_.test(phoneContext)
  )
}
