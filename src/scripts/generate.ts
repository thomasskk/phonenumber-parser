import { TypeCompiler } from '@sinclair/typebox/compiler'
import { sizeof, xml2js, downloadFile } from 'node-utils'
import fs from 'fs'
import path from 'path'
import { XMLSchema, Territory } from '../schema.js'

const __dirname = new URL('.', import.meta.url).pathname

const XML_PATH = path.join(__dirname, 'PhoneNumberMetadata.xml')
const OLD_XML_PATH = path.join(__dirname, 'PhoneNumberMetadata.xml.old')
const XML_URL =
  'https://raw.githubusercontent.com/google/libphonenumber/master/resources/PhoneNumberMetadata.xml'

await fs.promises.rename(XML_PATH, OLD_XML_PATH)

const downloadFileRes = await downloadFile({
  path: XML_PATH,
  url: XML_URL,
})

if (!downloadFileRes.success) {
  await fs.promises.rename(OLD_XML_PATH, XML_PATH)
  throw new Error(downloadFileRes.error)
}

const xmlString = await fs.promises.readFile(XML_PATH, 'utf8')

const xml = TypeCompiler.Compile(XMLSchema).Decode(xml2js(xmlString))

console.log(sizeof(xml))

const countries: Record<string, Territory> = {}
const nonGeographic: Record<string, Territory> = {}
const countryCodes: Record<string, string[]> = {}

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

    if (!countryCodes[territory.countryCode]) {
      countryCodes[territory.countryCode] = []
    }

    if (territory.mainCountryForCode) {
      countryCodes[territory.countryCode].unshift(territory.id)
    } else {
      countryCodes[territory.countryCode].push(territory.id)
    }
  }
}

const metadata = { countries, nonGeographic, countryCodes }

const rootDir = process.cwd()

await fs.promises.writeFile(
  path.join(rootDir, 'metadata.json'),
  JSON.stringify(metadata, null, 2)
)
