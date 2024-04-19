import { formatNationalNumberUsingFormat } from './formatNationalNumberUsingFormat.js'
import { matchesEntirely } from './matchesEntirely.js'
import { toArray } from './metadata.js'
import { NumberFormatElement, Territory } from './schema.js'
import { Format } from './types.js'

const DEFAULT_EXT_PREFIX = ' ext. '

const formatNationalNumber = (
  number: string,
  formatAs: Format,
  planMetadata: Territory
) => {
  const format = chooseFormatForNumber(planMetadata.availableFormats, number)
  if (!format) return number

  return formatNationalNumberUsingFormat(
    number,
    format,
    formatAs === 'INTERNATIONAL',
    !!format.nationalPrefixOptionalWhenFormatting,
    planMetadata.nationalPrefix
  )
}

const addExtension = (number: string, planMetadata: Territory, ext?: string) =>
  ext
    ? `${number}${planMetadata.preferredExtnPrefix ?? DEFAULT_EXT_PREFIX}${ext}`
    : number

const formatRFC3966 = ({ number, ext }: { number: string; ext?: string }) => {
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
}) => {
  if (format === 'NATIONAL') {
    const number = formatNationalNumber(
      nationalNumber,
      'NATIONAL',
      planMetadata
    )

    return addExtension(number, planMetadata, ext)
  }

  if (format === 'INTERNATIONAL') {
    if (!nationalNumber) {
      return `+${countryCode}`
    }

    const number = `+${countryCode} ${formatNationalNumber(
      nationalNumber,
      'INTERNATIONAL',
      planMetadata
    )}`

    return addExtension(number, planMetadata, ext)
  }

  if (format === 'E.164') {
    return `+${countryCode}${nationalNumber}`
  }

  if (format === 'RFC3966') {
    return formatRFC3966({
      number: `+${countryCode}${nationalNumber}`,
      ext,
    })
  }

  throw new Error()
}

export const chooseFormatForNumber = (
  availableFormats: Territory['availableFormats'],
  nationalNnumber: string
): NumberFormatElement | undefined => {
  const numberFormat = availableFormats?.numberFormat
  if (!numberFormat) return

  for (const format of toArray(numberFormat)) {
    const leadingDigits = toArray(format.leadingDigits)
    if (leadingDigits.length > 0) {
      const lastLeadingDigitsPattern = leadingDigits[leadingDigits.length - 1]
      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue
      }
    }
    if (matchesEntirely(nationalNnumber, format.pattern)) {
      return format
    }
  }
}
