import type { Territory } from "./schema.js";
import type { PhoneNumberType } from "./types.js";
export declare const getNumberType: ({ nationalNumber, countryMetadata, }: {
    nationalNumber: string;
    countryMetadata: Territory;
}) => PhoneNumberType | "fixedLineOrMobile" | undefined;
export declare const isNumberTypeEqualTo: (nationalNumber: string, typeData?: {
    pattern: string;
    possibleLengths: number[];
}) => boolean;
