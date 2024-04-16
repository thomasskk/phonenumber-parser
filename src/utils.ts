import fs from 'fs'
import path from 'path'
import { generate } from './generate.js'

export const getMetadata = () => {
  const __dirname = new URL('.', import.meta.url).pathname
  const xmlString = fs.readFileSync(
    path.join(__dirname, 'PhoneNumberMetadata.xml'),
    'utf8'
  )
  return generate(xmlString)
}
