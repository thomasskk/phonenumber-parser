import type { Territory } from "./schema.js";
export declare const hasCountryCode: (countryCode: string) => boolean;
export declare const getPlanMetadata: ({ countryCode, }: {
    countryCode: string;
}) => Territory;
export declare const getExactCountry: (countryCode: string, nationalNumber: string) => {
    country?: string;
    countryMetadata?: Territory;
};
export declare const toArray: <P>(value: P | P[] | undefined) => P[];
