import { RFC3966_EXTN_PREFIX, VALID_DIGITS } from './constants.js'

const getExtensionDigitsPattern = (maxLength: string) =>
  `([${VALID_DIGITS}]{1,${maxLength}})`

export const createExtensionPattern = () => {
  const extLimitAfterExplicitLabel = '20'
  const extLimitAfterLikelyLabel = '15'
  const extLimitAfterAmbiguousChar = '9'
  const extLimitWhenNotSure = '6'
  const possibleSeparatorsBetweenNumberAndExtLabel = '[ \t,]*'
  const possibleCharsAfterExtLabel = '[:\\.]?[ \t,-]*'
  const optionalExtnSuffix = '#?'
  const explicitExtLabels = '(?:e?xt(?:ensi(?:o?))?n?|anexo)'
  const ambiguousExtLabels = '(?:[x#~]|int)'
  const ambiguousSeparator = '[- ]+'
  const possibleSeparatorsNumberExtLabelNoComma = '[ \t]*'
  const autoDiallingAndExtLabelsFound = '(?:,{2}|;)'
  const rfcExtn =
    RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel)
  const explicitExtn =
    possibleSeparatorsBetweenNumberAndExtLabel +
    explicitExtLabels +
    possibleCharsAfterExtLabel +
    getExtensionDigitsPattern(extLimitAfterExplicitLabel) +
    optionalExtnSuffix
  const ambiguousExtn =
    possibleSeparatorsBetweenNumberAndExtLabel +
    ambiguousExtLabels +
    possibleCharsAfterExtLabel +
    getExtensionDigitsPattern(extLimitAfterAmbiguousChar) +
    optionalExtnSuffix
  const americanStyleExtnWithSuffix =
    ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + '#'

  const autoDiallingExtn =
    possibleSeparatorsNumberExtLabelNoComma +
    autoDiallingAndExtLabelsFound +
    possibleCharsAfterExtLabel +
    getExtensionDigitsPattern(extLimitAfterLikelyLabel) +
    optionalExtnSuffix
  const onlyCommasExtn =
    possibleSeparatorsNumberExtLabelNoComma +
    '(?:,)+' +
    possibleCharsAfterExtLabel +
    getExtensionDigitsPattern(extLimitAfterAmbiguousChar) +
    optionalExtnSuffix

  return (
    rfcExtn +
    '|' +
    explicitExtn +
    '|' +
    ambiguousExtn +
    '|' +
    americanStyleExtnWithSuffix +
    '|' +
    autoDiallingExtn +
    '|' +
    onlyCommasExtn
  )
}
