import { TypeCompiler } from '@sinclair/typebox/compiler'
import { PHONE_NUMBER_TYPES } from './constants.js'
import { Territory, XMLSchema } from './schema.js'
import {
  MetadataObject,
  PhoneNumberType,
  PhoneNumberTypesData,
} from './types.js'
import { xml2js } from 'node-utils'

export const generate = (xmlString: string): MetadataObject => {
  const xml = TypeCompiler.Compile(XMLSchema).Decode(xml2js(xmlString))

  const countries: Record<string, Territory> = {}
  const nonGeographic: Record<string, Territory> = {}
  const countryCallingCodes: Record<string, string[]> = {}

  for (const territory of xml.phoneNumberMetadata.territories.territory) {
    if (territory.id !== '001' && !territory.internationalPrefix) {
      throw new Error(
        `"internationalPrefix" is missing for country ${territory.id}`
      )
    }

    countries[territory.id] = territory

    if (territory.id === '001') {
      nonGeographic[territory.countryCode] = territory
    } else {
      countries[territory.id] = territory

      if (!countryCallingCodes[territory.countryCode]) {
        countryCallingCodes[territory.countryCode] = []
      }

      if (territory.mainCountryForCode) {
        countryCallingCodes[territory.countryCode].unshift(territory.id)
      } else {
        countryCallingCodes[territory.countryCode].push(territory.id)
      }
    }
  }

  return { countries, nonGeographic, countryCallingCodes }
}

export const getPhoneNumberTypes = (
  territory: Territory
): PhoneNumberTypesData => {
  return PHONE_NUMBER_TYPES.reduce((output, type) => {
    const territoryType = territory[type]
    if (!territoryType) return output
    const pattern = territoryType?.nationalNumberPattern.replace(/\s/g, '')
    const possibleLengths = parsePossibleLengths(
      territoryType.possibleLengths.national
    )

    if (pattern) {
      output[type] = {
        pattern,
        possibleLengths,
      }
    }
    return output
  }, {} as PhoneNumberTypesData)
}

const parsePossibleLengths = (possibleLengthString: string) => {
  const lengths: number[] = []

  for (const length of possibleLengthString.split(',')) {
    if (!length.trim()) throw new Error()

    const rangeMatch = length.match(/^\[(\d+)-(\d+)\]$/)
    if (rangeMatch) {
      const [, min, max] = rangeMatch.map(Number)
      if (max - min < 2) throw new Error()

      for (let i = min; i <= max; i++) {
        if (lengths.includes(i)) throw new Error()
        lengths.push(i)
      }
    } else {
      const num = Number(length)
      if (isNaN(num) || lengths.includes(num)) throw new Error()
      lengths.push(num)
    }
  }

  return lengths
}

export const getPossibleLenghts = (territory: Territory) => {
  const types = getPhoneNumberTypes(territory)

  const possibleLengths: number[] = []

  for (const type of Object.keys(types)) {
    const typePossibleLengths = types[type as PhoneNumberType]?.possibleLengths

    for (const i of typePossibleLengths) {
      possibleLengths.push(i)
    }

    types[type as PhoneNumberType].possibleLengths = typePossibleLengths
  }

  return possibleLengths.sort((a, b) => a - b)
}
