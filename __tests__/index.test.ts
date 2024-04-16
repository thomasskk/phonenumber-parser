import { describe, it, expect } from 'vitest'
import { parse } from '../src/parse.js'

describe('parse', () => {
  expect(parse('Phone: +7 (800) 555-35-35.')).toMatchObject({
    country: 'RU',
    phone: '8005553535',
  })

  expect(parse('+1-213-373-4253')).toMatchObject({
    country: 'US',
    phone: '2133734253',
  })

  expect(parse('+33169454850')).toMatchObject({
    country: 'FR',
    phone: '169454850',
  })

  expect(parse('+44 7700 300000')).toMatchObject({
    country: 'JE',
    phone: '7700300000',
  })

  expect(parse('+7 702 211 1111')).toMatchObject({
    country: 'KZ',
    phone: '7022111111',
  })

  expect(parse('+212659777777')).toMatchObject({
    country: 'MA',
    phone: '659777777',
  })

  it('should work in edge cases', () => {
    expect(() => parse('')).toThrowError()

    expect(() => parse('+')).toThrowError()

    expect(() => parse('123')).toThrowError()

    expect(() => parse('+210')).toThrowError()

    expect(() => parse('+210')).toThrowError()

    expect(() => parse('+0123')).toThrowError()

    expect(parse('+12460000000')).toMatchObject({
      country: 'BB',
      phone: '2460000000',
    })

    expect(parse('+4915784846111‬')).toMatchObject({
      country: 'DE',
      phone: '15784846111',
    })
  })

  it('should parse phone number extensions', () => {
    expect(parse('+12134567890#1234')).toMatchObject({
      country: 'US',
      phone: '2134567890',
      ext: '1234',
    })

    expect(parse('+78005553535 x1234')).toMatchObject({
      country: 'RU',
      phone: '8005553535',
      ext: '1234',
    })
  })

  it('should work with Argentina numbers', () => {
    expect(parse('+54 9 3435 55 1212')).toMatchObject({
      country: 'AR',
      phone: '93435551212',
    })
  })

  it('should work with Mexico numbers', () => {
    expect(parse('+52 449 978 0001')).toMatchObject({
      country: 'MX',
      phone: '4499780001',
    })
  })

  it('should parse non-geographic numbering plan phone numbers', () => {
    expect(parse('+870773111632')).toMatchObject({})
  })

  it('should parse non-geographic numbering plan phone numbers (extended)', () => {
    expect(parse('+870773111632')).toMatchObject({
      country: undefined,
      countryCallingCode: '870',
      phone: '773111632',
      ext: undefined,
      possible: true,
      valid: true,
    })
  })

  it('should correctly parse numbers starting with the same digit as the national prefix', () => {
    expect(parse('+37582004910060')).toMatchObject({
      country: 'BY',
      phone: '82004910060',
    })
  })
})
