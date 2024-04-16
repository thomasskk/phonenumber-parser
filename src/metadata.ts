import { Territory } from './schema.js'
import { MetadataObject } from './types.js'
import { getNumberType } from './getCountryByNationalNumber.js'

export class Metadata {
  constructor(public metadata: MetadataObject) {}

  hasCallingCode(callingCode: string): boolean {
    if (this.metadata.countryCallingCodes[callingCode]) return true
    if (this.metadata.nonGeographic[callingCode]) return true

    return false
  }

  isNonGeographicCallingCode(callingCode: string): boolean {
    return this.metadata.nonGeographic[callingCode] ? true : false
  }

  getPlanMetadata({ callingCode }: { callingCode: string }): Territory {
    if (!this.hasCallingCode(callingCode)) {
      throw new Error(`Unknown calling code: ${callingCode}`)
    }

    const countryCode = this.metadata.countryCallingCodes[callingCode]?.[0]
    if (countryCode) return this.metadata.countries[countryCode]

    return this.metadata.nonGeographic[callingCode]
  }

  getExactCountry(
    callingCode: string,
    nationalNumber: string
  ): { country?: string; countryMetadata?: Territory } {
    const countries = this.metadata.countryCallingCodes[callingCode]
    if (!countries) {
      return {
        countryMetadata: this.metadata.nonGeographic[callingCode],
      }
    }

    for (const country of countries) {
      const countryMetadata = this.metadata.countries[country]
      if (!countryMetadata) continue
      const leadingDigits = countryMetadata.leadingDigits

      if (leadingDigits) {
        if (nationalNumber.search(leadingDigits) === 0) {
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

    return {
      countryMetadata: this.metadata.countries[countries[0]],
      country: countries[0],
    }
  }
}
