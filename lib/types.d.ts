import { PHONE_NUMBER_TYPES, NON_FIXED_LINE_PHONE_TYPES } from './constants.js';
import { Territory } from './schema.js';
export type PhoneNumberType = (typeof PHONE_NUMBER_TYPES)[number];
export type NonFixedLinePhoneNumberType = (typeof NON_FIXED_LINE_PHONE_TYPES)[number];
export type Metadata = {
    countries: Record<string, Territory>;
    nonGeographic: Record<string, Territory>;
    countryCodes: Record<string, string[]>;
};
export type PhoneNumberTypesData = Record<Partial<PhoneNumberType>, {
    pattern: string;
    possibleLengths: number[];
}>;
export type Format = 'NATIONAL' | 'INTERNATIONAL' | 'E.164' | 'RFC3966';
