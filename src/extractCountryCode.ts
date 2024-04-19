import { MAX_LENGTH_COUNTRY_CODE } from './constants.js'
import { hasCountryCode } from './metadata.js'

export const extractCountryCode = (
  number: string
): { countryCode?: string; number?: string } => {
  if (number[0] !== '+') return { number }
  if (number[1] === '0' || number.length <= 3) return {}

  let i = 2
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    const countryCode = number.slice(1, i)

    if (hasCountryCode(countryCode)) {
      return {
        countryCode,
        number: number.slice(i),
      }
    }
    i++
  }

  return {}
}
