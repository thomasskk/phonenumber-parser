import { Type, Static } from '@sinclair/typebox'

export const CarrierCodeFormattingRule = Type.Union([
  Type.Literal('$CC $FG'),
  Type.Literal('$NP $CC ($FG)'),
  Type.Literal('$CC ($FG)'),
  Type.Literal('$NP$CC $FG'),
  Type.Literal('$NP$CC-$FG'),
])

export const NationalPrefixFormattingRule = Type.Union([
  Type.Literal('($FG)'),
  Type.Literal('($NP $FG)'),
  Type.Literal('$NP 0$FG'),
  Type.Literal('$NP$FG'),
  Type.Literal('$NP $FG'),
  Type.Literal('($NP$FG)'),
  Type.Literal('$NP ($FG)'),
  Type.Literal('($NP-$FG)'),
  Type.Literal('0$FG'),
])

export const Format = Type.Union([
  Type.Literal('$1-$2 $3'),
  Type.Literal('$1-$2 $3-$4'),
  Type.Literal('$1-$2'),
  Type.Literal('$1 $2-$3'),
  Type.Literal('$1 $2-$3-$4'),
  Type.Literal('$1-$2 $3 $4 $5'),
  Type.Literal('$1-$2-$3'),
  Type.Literal('$1-$2-$3-$4'),
  Type.Literal('($1) $2-$3'),
  Type.Literal('$1/$2 $3 $4'),
  Type.Literal('$1.$2.$3'),
  Type.Literal('$1-$2 $3 $4'),
  Type.Literal('$1'),
  Type.Literal('$1 $2'),
  Type.Literal('$1 $2 $3'),
  Type.Literal('$1 $2 $3 $4'),
  Type.Literal('$1 $2 $3 $4 $5'),
  Type.Literal('$2 $3 $4'),
  Type.Literal('$2 15-$3-$4'),
])

export const IntlFormat = Type.Union([
  Type.Literal('$1-$2-$3'),
  Type.Literal('$1 $2 $3 $4'),
  Type.Literal('NA'),
  Type.Literal('$1 $2'),
  Type.Literal('$1 $2 $3'),
  Type.Literal('$1 $2 $3-$4'),
  Type.Literal('$1 $2 $3 $4 $5'),
])

export const PreferredInternationalPrefix = Type.Union([
  Type.Literal('0~0'),
  Type.Literal('00'),
  Type.Literal('0011'),
  Type.Literal('020'),
  Type.Literal('8~10'),
])

export const NoInternationalDiallingPossibleLengths = Type.Object({
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
  format: Format,
  pattern: Type.String(),
  nationalPrefixFormattingRule: Type.Optional(NationalPrefixFormattingRule),
  intlFormat: Type.Optional(IntlFormat),
  nationalPrefixOptionalWhenFormatting: Type.Optional(Type.Boolean()),
  carrierCodeFormattingRule: Type.Optional(CarrierCodeFormattingRule),
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
  preferredInternationalPrefix: Type.Optional(PreferredInternationalPrefix),
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
