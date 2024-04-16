import { checkNumberLengthForType } from './checkNumberLengthForType.js'
import { getPossibleLenghts } from './generate.js'
import { matchesEntirely } from './matchesEntirely.js'
import { Territory } from './schema.js'

export const extractNationalNumberFromPossiblyIncompleteNumber = (
  number: string,
  planMetadata: Territory
): string => {
  const nationalPrefixForParsing =
    planMetadata.nationalPrefixForParsing || planMetadata.nationalPrefix
  const nationalPrefixTransformRule = planMetadata.nationalPrefixTransformRule

  if (nationalPrefixForParsing) {
    const prefixPattern = new RegExp('^(?:' + nationalPrefixForParsing + ')')
    const prefixMatch = prefixPattern.exec(number)
    if (prefixMatch) {
      const capturedGroupsCount = prefixMatch.length - 1
      const hasCapturedGroups =
        capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount]
      if (nationalPrefixTransformRule && hasCapturedGroups) {
        return number.replace(prefixPattern, nationalPrefixTransformRule)
      } else {
        const prefixBeforeNationalNumber = prefixMatch[0]
        return number.slice(prefixBeforeNationalNumber.length)
      }
    }
  }

  return number
}

export const extractNationalNumber = (
  number: string,
  planMetadata: Territory
): string => {
  const nationalNumber = extractNationalNumberFromPossiblyIncompleteNumber(
    number,
    planMetadata
  )

  if (nationalNumber !== number) {
    if (
      !shouldHaveExtractedNationalPrefix({
        planMetadata,
        nationalNumberBefore: number,
        nationalNumberAfter: nationalNumber,
      })
    ) {
      return number
    }
    if (getPossibleLenghts(planMetadata)) {
      if (!isPossibleIncompleteNationalNumber(nationalNumber, planMetadata)) {
        return number
      }
    }
  }

  return nationalNumber
}

const shouldHaveExtractedNationalPrefix = (args: {
  nationalNumberBefore: string
  nationalNumberAfter: string
  planMetadata: Territory
}) => {
  const { nationalNumberBefore, nationalNumberAfter, planMetadata } = args
  const nationalNumberPattern = planMetadata.generalDesc.nationalNumberPattern

  if (
    matchesEntirely(nationalNumberBefore, nationalNumberPattern) &&
    !matchesEntirely(nationalNumberAfter, nationalNumberPattern)
  ) {
    return false
  }
  return true
}

const isPossibleIncompleteNationalNumber = (
  nationalNumber: string,
  planMetadata: Territory
) => {
  switch (checkNumberLengthForType(nationalNumber, planMetadata)) {
    case 'TOO_SHORT':
    case 'INVALID_LENGTH':
      return false
    default:
      return true
  }
}
