import { TypeCompiler } from '@sinclair/typebox/compiler'
import { sizeof, xml2js } from 'node-utils'
import fs from 'fs'
import path from 'path'
import { XMLSchema, Territory } from '../schema.js'

const __dirname = new URL('.', import.meta.url).pathname
const xmlString = fs.readFileSync(
  path.join(__dirname, 'PhoneNumberMetadata.xml'),
  'utf8'
)

const xml = TypeCompiler.Compile(XMLSchema).Decode(xml2js(xmlString))
console.log(sizeof(xml))

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

const metadata = { countries, nonGeographic, countryCallingCodes }

const rootDir = process.cwd()

await fs.promises.writeFile(
  path.join(rootDir, 'metadata.json'),
  JSON.stringify(metadata, null, 2)
)
