import { Territory } from './schema.js'
import { getNumberType } from './getCountryByNationalNumber.js'
import metadata from '../metadata.json' assert { type: 'json' }
import { valueInObj } from 'node-utils'

export const hasCallingCode = (callingCode: string): boolean => {
  if (valueInObj(callingCode, metadata.countryCallingCodes)) return true
  if (valueInObj(callingCode, metadata.nonGeographic)) return true
  return false
}

export const getPlanMetadata = ({
  callingCode,
}: {
  callingCode: string
}): Territory => {
  if (valueInObj(callingCode, metadata.countryCallingCodes)) {
    const countryCode = metadata.countryCallingCodes[callingCode][0]

    if (valueInObj(countryCode, metadata.countries)) {
      return metadata.countries[countryCode]
    }
  }

  if (valueInObj(callingCode, metadata.nonGeographic)) {
    return metadata.nonGeographic[callingCode]
  }

  throw new Error(`Unknown calling code: ${callingCode}`)
}

export const getExactCountry = (
  callingCode: string,
  nationalNumber: string
): { country?: string; countryMetadata?: Territory } => {
  if (!valueInObj(callingCode, metadata.countryCallingCodes)) {
    if (valueInObj(callingCode, metadata.nonGeographic)) {
      return {
        countryMetadata: metadata.nonGeographic[callingCode],
      }
    }

    return {}
  }

  const countries = metadata.countryCallingCodes[callingCode]

  for (const country of countries) {
    if (!valueInObj(country, metadata.countries)) continue
    const countryMetadata = metadata.countries[country]

    if (!countryMetadata) continue

    if ('leadingDigits' in countryMetadata) {
      if (nationalNumber.search(countryMetadata.leadingDigits) === 0) {
        return {
          country,
          countryMetadata,
        }
      }
    } else if (
      getNumberType({
        nationalNumber,
        countryMetadata,
      })
    ) {
      return {
        country,
        countryMetadata,
      }
    }
  }

  if (valueInObj(countries[0], metadata.countries)) {
    return {
      countryMetadata: metadata.countries[countries[0]],
      country: countries[0],
    }
  }

  return {
    country: countries[0],
  }
}
