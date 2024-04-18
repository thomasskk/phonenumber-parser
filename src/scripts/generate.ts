import { TypeCompiler } from '@sinclair/typebox/compiler'
import { sizeof, xml2js } from 'node-utils'
import fs from 'fs'
import path from 'path'
import { XMLSchema, Territory } from '../schema.js'
import stream from 'stream'

const __dirname = new URL('.', import.meta.url).pathname

const XML_PATH = path.join(__dirname, 'PhoneNumberMetadata.xml')
const OLD_XML_PATH = path.join(__dirname, 'PhoneNumberMetadata.xml.old')
const XML_URL =
  'https://raw.githubusercontent.com/google/libphonenumber/master/resources/PhoneNumberMetadata.xml'

if (fs.existsSync(XML_PATH)) {
  await fs.promises.rename(XML_PATH, OLD_XML_PATH)
}

const res = await fetch(XML_URL)
if (!res.body) throw new Error('Response body is missing')

const fileStream = fs.createWriteStream(XML_PATH)
await stream.promises.finished(
  stream.Readable.fromWeb(res.body).pipe(fileStream)
)

const xmlString = await fs.promises.readFile(XML_PATH, 'utf8')

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
