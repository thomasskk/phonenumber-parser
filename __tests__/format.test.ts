import { describe, it, expect } from 'vitest'
import { format } from '../src/format.js'
import { parse, parseIncompletePhoneNumber } from '../src/parse.js'
import { Format } from '../src/types.js'
import { getPlanMetadata } from '../src/metadata.js'
import { extractNationalNumber } from '../src/extractNationalNumber.js'

const formatNumber = (number: string, _format: Format) => {
  const data = parse(number)
  const planMetadata = getPlanMetadata({
    countryCode: data.countryCode,
  })
  const nationalNumber = extractNationalNumber(
    parseIncompletePhoneNumber(data.phone),
    getPlanMetadata({
      countryCode: data.countryCode,
    })
  )
  return format({
    ext: data.ext,
    format: _format,
    country: data.country,
    nationalNumber,
    countryCode: data.countryCode,
    planMetadata,
  })
}

describe('format', () => {
  it('should work with the first argument being a E.164 number', () => {
    expect(formatNumber('+12133734253', 'NATIONAL')).toEqual('(213) 373-4253')
    expect(formatNumber('+12133734253', 'INTERNATIONAL')).toEqual(
      '+1 213 373 4253'
    )

    // Invalid number.
    expect(formatNumber('+12111111111', 'NATIONAL')).toEqual('(211) 111-1111')

    // Formatting invalid E.164 numbers.
    expect(formatNumber('+11111', 'INTERNATIONAL')).toEqual('+1 1111')
    expect(formatNumber('+11111', 'NATIONAL')).toEqual('1111')
  })

  it('should format using formats with no leading digits (`format.leadingDigitsPatterns().length === 0`)', () => {
    expect(formatNumber('+88812345678901', 'INTERNATIONAL')).toEqual(
      '+888 123 456 78901'
    )
  })

  it('should format valid phone numbers', () => {
    // Kazakhstan
    expect(formatNumber('+7 702 211 1111', 'NATIONAL')).toEqual(
      '8 (702) 211 1111'
    )
  })

  it('should format phone number extensions', () => {
    // National
    expect(formatNumber('+12133734253ext.123', 'NATIONAL')).toEqual(
      '(213) 373-4253 ext. 123'
    )

    // International
    expect(formatNumber('+12133734253ext.123', 'INTERNATIONAL')).toEqual(
      '+1 213 373 4253 ext. 123'
    )

    // International
    expect(formatNumber('+12133734253ext.123', 'INTERNATIONAL')).toEqual(
      '+1 213 373 4253 ext. 123'
    )

    // E.164
    expect(formatNumber('+12133734253ext.123', 'E.164')).toEqual('+12133734253')

    // RFC3966
    expect(formatNumber('+12133734253ext.123', 'RFC3966')).toEqual(
      'tel:+12133734253;ext=123'
    )
  })

  it('should work with Argentina numbers', () => {
    expect(formatNumber('+543435551212', 'INTERNATIONAL')).toEqual(
      '+54 3435 55 1212'
    )
    expect(formatNumber('+543435551212', 'NATIONAL')).toEqual('03435 55-1212')
  })

  it('should work with Mexico numbers', () => {
    expect(formatNumber('+524499780001', 'INTERNATIONAL')).toEqual(
      '+52 449 978 0001'
    )
    expect(formatNumber('+524499780001', 'NATIONAL')).toEqual('449 978 0001')
    expect(formatNumber('+523312345678', 'INTERNATIONAL')).toEqual(
      '+52 33 1234 5678'
    )
    expect(formatNumber('+523312345678', 'NATIONAL')).toEqual('33 1234 5678')
  })

  it('should format possible numbers', () => {
    expect(formatNumber('+71111111111', 'E.164')).toEqual('+71111111111')
    expect(formatNumber('+71111111111', 'NATIONAL')).toEqual('1111111111')
    expect(formatNumber('+71111111111', 'INTERNATIONAL')).toEqual(
      '+7 1111111111'
    )
  })

  it('should format non-geographic numbering plan phone numbers', () => {
    expect(formatNumber('+870773111632', 'INTERNATIONAL')).toEqual(
      '+870 773 111 632'
    )
    expect(formatNumber('+870773111632', 'NATIONAL')).toEqual('773 111 632')
  })
})
