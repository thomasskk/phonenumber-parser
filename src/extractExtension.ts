import { createExtensionPattern } from './createExtensionPattern.js'

const EXTN_PATTERN = new RegExp('(?:' + createExtensionPattern() + ')$', 'i')

export const extractExtension = (number: string) => {
  const start = number.search(EXTN_PATTERN)
  if (start < 0) return

  const numberWithoutExtension = number.slice(0, start)
  const matches = number.match(EXTN_PATTERN)
  if (!matches) return

  let i = 1
  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i],
      }
    }
    i++
  }
}
