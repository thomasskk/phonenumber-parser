import { Static } from '@sinclair/typebox';
export declare const CarrierCodeFormattingRule: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>;
export declare const NationalPrefixFormattingRule: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>;
export declare const Format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
export declare const IntlFormat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>;
export declare const PreferredInternationalPrefix: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"0~0">, import("@sinclair/typebox").TLiteral<"00">, import("@sinclair/typebox").TLiteral<"0011">, import("@sinclair/typebox").TLiteral<"020">, import("@sinclair/typebox").TLiteral<"8~10">]>;
export declare const NoInternationalDiallingPossibleLengths: import("@sinclair/typebox").TObject<{
    national: import("@sinclair/typebox").TString;
}>;
export declare const PersonalNumber: import("@sinclair/typebox").TObject<{
    possibleLengths: import("@sinclair/typebox").TObject<{
        national: import("@sinclair/typebox").TString;
    }>;
    exampleNumber: import("@sinclair/typebox").TString;
    nationalNumberPattern: import("@sinclair/typebox").TString;
}>;
export declare const FixedLinePossibleLengths: import("@sinclair/typebox").TObject<{
    national: import("@sinclair/typebox").TString;
    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const FixedLine: import("@sinclair/typebox").TObject<{
    possibleLengths: import("@sinclair/typebox").TObject<{
        national: import("@sinclair/typebox").TString;
        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    exampleNumber: import("@sinclair/typebox").TString;
    nationalNumberPattern: import("@sinclair/typebox").TString;
}>;
export declare const NumberFormatElement: import("@sinclair/typebox").TObject<{
    leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
    pattern: import("@sinclair/typebox").TString;
    nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
    intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
    nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
}>;
export declare const GeneralDesc: import("@sinclair/typebox").TObject<{
    nationalNumberPattern: import("@sinclair/typebox").TString;
}>;
export declare const NoInternationalDialling: import("@sinclair/typebox").TObject<{
    possibleLengths: import("@sinclair/typebox").TObject<{
        national: import("@sinclair/typebox").TString;
    }>;
    nationalNumberPattern: import("@sinclair/typebox").TString;
}>;
export declare const AvailableFormats: import("@sinclair/typebox").TObject<{
    numberFormat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
        pattern: import("@sinclair/typebox").TString;
        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
    }>>, import("@sinclair/typebox").TObject<{
        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
        pattern: import("@sinclair/typebox").TString;
        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
    }>]>;
}>;
export declare const Territory: import("@sinclair/typebox").TObject<{
    generalDesc: import("@sinclair/typebox").TObject<{
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>;
    fixedLine: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    uan: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    id: import("@sinclair/typebox").TString;
    countryCode: import("@sinclair/typebox").TString;
    internationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    availableFormats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        numberFormat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
            pattern: import("@sinclair/typebox").TString;
            nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
            intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
            nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
        }>>, import("@sinclair/typebox").TObject<{
            leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
            pattern: import("@sinclair/typebox").TString;
            nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
            intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
            nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
        }>]>;
    }>>;
    noInternationalDialling: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
        }>;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    tollFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    premiumRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    sharedCost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    nationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    pager: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    personalNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    voip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    nationalPrefixForParsing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    nationalPrefixTransformRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    mobileNumberPortableRegion: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    mainCountryForCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"0~0">, import("@sinclair/typebox").TLiteral<"00">, import("@sinclair/typebox").TLiteral<"0011">, import("@sinclair/typebox").TLiteral<"020">, import("@sinclair/typebox").TLiteral<"8~10">]>>;
    voicemail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        possibleLengths: import("@sinclair/typebox").TObject<{
            national: import("@sinclair/typebox").TString;
            localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        exampleNumber: import("@sinclair/typebox").TString;
        nationalNumberPattern: import("@sinclair/typebox").TString;
    }>>;
    preferredExtnPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const Territories: import("@sinclair/typebox").TObject<{
    territory: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        generalDesc: import("@sinclair/typebox").TObject<{
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>;
        fixedLine: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        uan: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        id: import("@sinclair/typebox").TString;
        countryCode: import("@sinclair/typebox").TString;
        internationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        availableFormats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            numberFormat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
                pattern: import("@sinclair/typebox").TString;
                nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
                intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
                nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
            }>>, import("@sinclair/typebox").TObject<{
                leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
                pattern: import("@sinclair/typebox").TString;
                nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
                intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
                nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
            }>]>;
        }>>;
        noInternationalDialling: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
            }>;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        tollFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        premiumRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        sharedCost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        nationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        pager: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        personalNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        voip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        nationalPrefixForParsing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        nationalPrefixTransformRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        mobileNumberPortableRegion: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        mainCountryForCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"0~0">, import("@sinclair/typebox").TLiteral<"00">, import("@sinclair/typebox").TLiteral<"0011">, import("@sinclair/typebox").TLiteral<"020">, import("@sinclair/typebox").TLiteral<"8~10">]>>;
        voicemail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            possibleLengths: import("@sinclair/typebox").TObject<{
                national: import("@sinclair/typebox").TString;
                localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
            exampleNumber: import("@sinclair/typebox").TString;
            nationalNumberPattern: import("@sinclair/typebox").TString;
        }>>;
        preferredExtnPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>;
export declare const PhoneNumberMetadata: import("@sinclair/typebox").TObject<{
    territories: import("@sinclair/typebox").TObject<{
        territory: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            generalDesc: import("@sinclair/typebox").TObject<{
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>;
            fixedLine: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            uan: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            id: import("@sinclair/typebox").TString;
            countryCode: import("@sinclair/typebox").TString;
            internationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            availableFormats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                numberFormat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                    format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
                    pattern: import("@sinclair/typebox").TString;
                    nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
                    intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
                    nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
                }>>, import("@sinclair/typebox").TObject<{
                    leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                    format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
                    pattern: import("@sinclair/typebox").TString;
                    nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
                    intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
                    nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
                }>]>;
            }>>;
            noInternationalDialling: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                }>;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            tollFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            premiumRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            sharedCost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            nationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            pager: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            personalNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            voip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            nationalPrefixForParsing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            nationalPrefixTransformRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            mobileNumberPortableRegion: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            mainCountryForCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"0~0">, import("@sinclair/typebox").TLiteral<"00">, import("@sinclair/typebox").TLiteral<"0011">, import("@sinclair/typebox").TLiteral<"020">, import("@sinclair/typebox").TLiteral<"8~10">]>>;
            voicemail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                possibleLengths: import("@sinclair/typebox").TObject<{
                    national: import("@sinclair/typebox").TString;
                    localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>;
                exampleNumber: import("@sinclair/typebox").TString;
                nationalNumberPattern: import("@sinclair/typebox").TString;
            }>>;
            preferredExtnPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
    }>;
}>;
export declare const XMLSchema: import("@sinclair/typebox").TObject<{
    phoneNumberMetadata: import("@sinclair/typebox").TObject<{
        territories: import("@sinclair/typebox").TObject<{
            territory: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                generalDesc: import("@sinclair/typebox").TObject<{
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>;
                fixedLine: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                mobile: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                uan: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                id: import("@sinclair/typebox").TString;
                countryCode: import("@sinclair/typebox").TString;
                internationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                availableFormats: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    numberFormat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                        format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
                        pattern: import("@sinclair/typebox").TString;
                        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
                        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
                        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
                    }>>, import("@sinclair/typebox").TObject<{
                        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                        format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2 $3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2">, import("@sinclair/typebox").TLiteral<"$1 $2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2-$3-$4">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1-$2-$3-$4">, import("@sinclair/typebox").TLiteral<"($1) $2-$3">, import("@sinclair/typebox").TLiteral<"$1/$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1.$2.$3">, import("@sinclair/typebox").TLiteral<"$1-$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">, import("@sinclair/typebox").TLiteral<"$2 $3 $4">, import("@sinclair/typebox").TLiteral<"$2 15-$3-$4">]>;
                        pattern: import("@sinclair/typebox").TString;
                        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"($FG)">, import("@sinclair/typebox").TLiteral<"($NP $FG)">, import("@sinclair/typebox").TLiteral<"$NP 0$FG">, import("@sinclair/typebox").TLiteral<"$NP$FG">, import("@sinclair/typebox").TLiteral<"$NP $FG">, import("@sinclair/typebox").TLiteral<"($NP$FG)">, import("@sinclair/typebox").TLiteral<"$NP ($FG)">, import("@sinclair/typebox").TLiteral<"($NP-$FG)">, import("@sinclair/typebox").TLiteral<"0$FG">]>>;
                        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$1-$2-$3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4">, import("@sinclair/typebox").TLiteral<"NA">, import("@sinclair/typebox").TLiteral<"$1 $2">, import("@sinclair/typebox").TLiteral<"$1 $2 $3">, import("@sinclair/typebox").TLiteral<"$1 $2 $3-$4">, import("@sinclair/typebox").TLiteral<"$1 $2 $3 $4 $5">]>>;
                        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP $CC ($FG)">, import("@sinclair/typebox").TLiteral<"$CC ($FG)">, import("@sinclair/typebox").TLiteral<"$NP$CC $FG">, import("@sinclair/typebox").TLiteral<"$NP$CC-$FG">]>>;
                    }>]>;
                }>>;
                noInternationalDialling: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                    }>;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                tollFree: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                premiumRate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                sharedCost: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                nationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                pager: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                personalNumber: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                voip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                nationalPrefixForParsing: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                nationalPrefixTransformRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                mobileNumberPortableRegion: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                mainCountryForCode: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"0~0">, import("@sinclair/typebox").TLiteral<"00">, import("@sinclair/typebox").TLiteral<"0011">, import("@sinclair/typebox").TLiteral<"020">, import("@sinclair/typebox").TLiteral<"8~10">]>>;
                voicemail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    possibleLengths: import("@sinclair/typebox").TObject<{
                        national: import("@sinclair/typebox").TString;
                        localOnly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>;
                    exampleNumber: import("@sinclair/typebox").TString;
                    nationalNumberPattern: import("@sinclair/typebox").TString;
                }>>;
                preferredExtnPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
        }>;
    }>;
}>;
export type XML = Static<typeof XMLSchema>;
export type Territory = Static<typeof Territory>;
