import { type Static } from "@sinclair/typebox";
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
    format: import("@sinclair/typebox").TString;
    pattern: import("@sinclair/typebox").TString;
    nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
        format: import("@sinclair/typebox").TString;
        pattern: import("@sinclair/typebox").TString;
        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>, import("@sinclair/typebox").TObject<{
        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
        format: import("@sinclair/typebox").TString;
        pattern: import("@sinclair/typebox").TString;
        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
            format: import("@sinclair/typebox").TString;
            pattern: import("@sinclair/typebox").TString;
            nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>, import("@sinclair/typebox").TObject<{
            leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
            format: import("@sinclair/typebox").TString;
            pattern: import("@sinclair/typebox").TString;
            nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
    preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
                format: import("@sinclair/typebox").TString;
                pattern: import("@sinclair/typebox").TString;
                nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>, import("@sinclair/typebox").TObject<{
                leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                format: import("@sinclair/typebox").TString;
                pattern: import("@sinclair/typebox").TString;
                nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
        preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
                    format: import("@sinclair/typebox").TString;
                    pattern: import("@sinclair/typebox").TString;
                    nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                }>>, import("@sinclair/typebox").TObject<{
                    leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                    format: import("@sinclair/typebox").TString;
                    pattern: import("@sinclair/typebox").TString;
                    nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                    carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
            preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
                        format: import("@sinclair/typebox").TString;
                        pattern: import("@sinclair/typebox").TString;
                        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                    }>>, import("@sinclair/typebox").TObject<{
                        leadingDigits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
                        format: import("@sinclair/typebox").TString;
                        pattern: import("@sinclair/typebox").TString;
                        nationalPrefixFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        intlFormat: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                        nationalPrefixOptionalWhenFormatting: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                        carrierCodeFormattingRule: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
                preferredInternationalPrefix: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
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
export type NumberFormatElement = Static<typeof NumberFormatElement>;
