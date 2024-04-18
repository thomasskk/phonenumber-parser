import { Territory } from './schema.js';
export declare const hasCallingCode: (callingCode: string) => boolean;
export declare const getPlanMetadata: ({ callingCode, }: {
    callingCode: string;
}) => Territory;
export declare const getExactCountry: (callingCode: string, nationalNumber: string) => {
    country?: string;
    countryMetadata?: Territory;
};
