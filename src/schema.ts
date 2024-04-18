import { Type, Static } from '@sinclair/typebox'

const NoInternationalDiallingPossibleLengths = Type.Object({
  national: Type.String(),
})

export const PersonalNumber = Type.Object({
  possibleLengths: NoInternationalDiallingPossibleLengths,
  exampleNumber: Type.String(),
  nationalNumberPattern: Type.String(),
})

export const FixedLinePossibleLengths = Type.Object({
  national: Type.String(),
  localOnly: Type.Optional(Type.String()),
})

export const FixedLine = Type.Object({
  possibleLengths: FixedLinePossibleLengths,
  exampleNumber: Type.String(),
  nationalNumberPattern: Type.String(),
})

export const NumberFormatElement = Type.Object({
  leadingDigits: Type.Optional(
    Type.Union([Type.String(), Type.Array(Type.String())])
  ),
  format: Type.String(),
  pattern: Type.String(),
  nationalPrefixFormattingRule: Type.Optional(Type.String()),
  intlFormat: Type.Optional(Type.String()),
  nationalPrefixOptionalWhenFormatting: Type.Optional(Type.Boolean()),
  carrierCodeFormattingRule: Type.Optional(Type.String()),
})

export const GeneralDesc = Type.Object({
  nationalNumberPattern: Type.String(),
})

export const NoInternationalDialling = Type.Object({
  possibleLengths: NoInternationalDiallingPossibleLengths,
  nationalNumberPattern: Type.String(),
})

export const AvailableFormats = Type.Object({
  numberFormat: Type.Union([
    Type.Array(NumberFormatElement),
    NumberFormatElement,
  ]),
})

export const Territory = Type.Object({
  generalDesc: GeneralDesc,
  fixedLine: Type.Optional(FixedLine),
  mobile: Type.Optional(FixedLine),
  uan: Type.Optional(FixedLine),
  id: Type.String(),
  countryCode: Type.String(),
  internationalPrefix: Type.Optional(Type.String()),
  availableFormats: Type.Optional(AvailableFormats),
  noInternationalDialling: Type.Optional(NoInternationalDialling),
  tollFree: Type.Optional(FixedLine),
  premiumRate: Type.Optional(FixedLine),
  sharedCost: Type.Optional(FixedLine),
  nationalPrefix: Type.Optional(Type.String()),
  pager: Type.Optional(FixedLine),
  personalNumber: Type.Optional(PersonalNumber),
  voip: Type.Optional(FixedLine),
  leadingDigits: Type.Optional(Type.String()),
  nationalPrefixForParsing: Type.Optional(Type.String()),
  nationalPrefixTransformRule: Type.Optional(Type.String()),
  mobileNumberPortableRegion: Type.Optional(Type.Boolean()),
  mainCountryForCode: Type.Optional(Type.Boolean()),
  preferredInternationalPrefix: Type.Optional(Type.String()),
  voicemail: Type.Optional(FixedLine),
  preferredExtnPrefix: Type.Optional(Type.String()),
})

export const Territories = Type.Object({
  territory: Type.Array(Territory),
})

export const PhoneNumberMetadata = Type.Object({
  territories: Territories,
})

export const XMLSchema = Type.Object({
  phoneNumberMetadata: PhoneNumberMetadata,
})

export type XML = Static<typeof XMLSchema>
export type Territory = Static<typeof Territory>
