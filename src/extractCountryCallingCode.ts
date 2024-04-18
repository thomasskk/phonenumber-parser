import { MAX_LENGTH_COUNTRY_CODE } from './constants.js'
import { hasCallingCode } from './metadata.js'

export const extractCountryCallingCode = (
  number: string
): { countryCallingCode?: string; number?: string } => {
  if (number[0] !== '+') return { number }
  if (number[1] === '0' || number.length <= 3) return {}

  let i = 2
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    const countryCallingCode = number.slice(1, i)

    if (hasCallingCode(countryCallingCode)) {
      return {
        countryCallingCode,
        number: number.slice(i),
      }
    }
    i++
  }

  return {}
}
