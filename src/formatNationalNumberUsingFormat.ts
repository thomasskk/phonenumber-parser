import { VALID_PUNCTUATION } from './constants.js'
import { NumberFormatElement } from './schema.js'

export const FIRST_GROUP_PATTERN = /(\$\d)/

const getNationalPrefixFormattingRule = (
  rule?: string,
  national_prefix?: string
) => {
  if (!rule || !national_prefix) return
  return rule.replace('$NP', national_prefix).replace('$FG', '$1')
}

export const formatNationalNumberUsingFormat = (
  number: string,
  format: NumberFormatElement,
  useInternationalFormat: boolean,
  withNationalPrefix: boolean,
  nationalPrefix?: string
) => {
  const nationalPrefixFormattingRule = getNationalPrefixFormattingRule(
    format.nationalPrefixFormattingRule,
    nationalPrefix
  )

  const formattedNumber = number.replace(
    new RegExp(format.pattern),
    useInternationalFormat
      ? format.intlFormat || format.format
      : withNationalPrefix && nationalPrefixFormattingRule
      ? format.format.replace(FIRST_GROUP_PATTERN, nationalPrefixFormattingRule)
      : format.format
  )
  if (useInternationalFormat) {
    return formattedNumber
      .replace(new RegExp(`[${VALID_PUNCTUATION}]+`, 'g'), ' ')
      .trim()
  }
  return formattedNumber
}
