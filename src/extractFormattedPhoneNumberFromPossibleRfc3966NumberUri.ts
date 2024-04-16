import { MAX_INPUT_STRING_LENGTH } from './constants.js'
import {
  extractPhoneContext,
  isPhoneContextValid,
  PLUS_SIGN,
  RFC3966_PREFIX_,
  RFC3966_PHONE_CONTEXT_,
  RFC3966_ISDN_SUBADDRESS_,
} from './extractPhoneContext.js'

export const extractFormattedPhoneNumberFromPossibleRfc3966NumberUri = (
  numberToParse: string
) => {
  const phoneContext = extractPhoneContext(numberToParse)
  if (!isPhoneContextValid(phoneContext)) {
    throw new Error('NOT_A_NUMBER')
  }

  let phoneNumberString

  if (phoneContext === null) {
    if (numberToParse.length > MAX_INPUT_STRING_LENGTH) {
      throw new Error('TOO_LONG')
    }
    phoneNumberString = numberToParse
  } else {
    phoneNumberString = ''

    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext
    }

    const indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_)
    let indexOfNationalNumber
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length
    } else {
      indexOfNationalNumber = 0
    }
    const indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_)
    phoneNumberString += numberToParse.substring(
      indexOfNationalNumber,
      indexOfPhoneContext
    )
  }

  const indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_)
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn)
  }

  if (phoneNumberString !== '') {
    return phoneNumberString
  }
}
