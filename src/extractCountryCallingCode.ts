import { MAX_LENGTH_COUNTRY_CODE } from './constants.js'
import { Metadata } from './metadata.js'

export const extractCountryCallingCode = (
  number: string,
  metadata: Metadata
): { countryCallingCode?: string; number?: string } => {
  if (number[0] !== '+') return { number }
  if (number[1] === '0' || number.length <= 3) return {}

  let i = 2
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    const countryCallingCode = number.slice(1, i)

    if (metadata.hasCallingCode(countryCallingCode)) {
      return {
        countryCallingCode,
        number: number.slice(i),
      }
    }
    i++
  }

  return {}
}
