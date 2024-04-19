import { formatNationalNumberUsingFormat } from './formatNationalNumberUsingFormat.js'
import { matchesEntirely } from './matchesEntirely.js'
import { toArray } from './metadata.js'
import { Territory } from './schema.js'
import { Format } from './types.js'

const DEFAULT_EXT_PREFIX = ' ext. '

const formatNationalNumber = (
  number: string,
  formatAs: Format,
  planMetadata: Territory
): string => {
  const numberFormat = planMetadata.availableFormats?.numberFormat
  if (!numberFormat) return number

  for (const format of toArray(numberFormat)) {
    const leadingDigits = toArray(format.leadingDigits)

    if (leadingDigits.length > 0) {
      const lastLeadingDigitsPattern = leadingDigits[leadingDigits.length - 1]
      if (number.search(lastLeadingDigitsPattern) !== 0) {
        continue
      }
    }

    if (matchesEntirely(number, format.pattern)) {
      return formatNationalNumberUsingFormat(
        number,
        format,
        formatAs === 'INTERNATIONAL',
        !!format.nationalPrefixOptionalWhenFormatting,
        planMetadata.nationalPrefix
      )
    }
  }

  return number
}

const addExtension = (
  number: string,
  planMetadata: Territory,
  ext?: string
): string => {
  if (!ext) return number
  const prefix = planMetadata.preferredExtnPrefix ?? DEFAULT_EXT_PREFIX
  return `${number}${prefix}${ext}`
}

const formatRFC3966 = ({
  number,
  ext,
}: {
  number: string
  ext?: string
}): string => {
  return `tel:${number}${ext ? ';ext=' + ext : ''}`
}

export const format = ({
  format,
  nationalNumber,
  countryCode,
  planMetadata,
  ext,
}: {
  country?: string
  format: Format
  nationalNumber: string
  countryCode: string
  planMetadata: Territory
  ext?: string
}): string => {
  switch (format) {
    case 'NATIONAL':
      return addExtension(
        formatNationalNumber(nationalNumber, 'NATIONAL', planMetadata),
        planMetadata,
        ext
      )

    case 'INTERNATIONAL':
      if (!nationalNumber) return `+${countryCode}`

      return addExtension(
        `+${countryCode} ${formatNationalNumber(
          nationalNumber,
          'INTERNATIONAL',
          planMetadata
        )}`,
        planMetadata,
        ext
      )

    case 'E.164':
      return `+${countryCode}${nationalNumber}`

    case 'RFC3966':
      return formatRFC3966({
        number: `+${countryCode}${nationalNumber}`,
        ext,
      })
  }
}
