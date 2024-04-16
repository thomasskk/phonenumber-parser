import { Territory } from './schema.js';
export declare const extractNationalNumberFromPossiblyIncompleteNumber: (number: string, planMetadata: Territory) => {
    nationalNumber: string;
    nationalPrefix: string | undefined;
    carrierCode: string | undefined;
} | {
    nationalNumber: string;
    nationalPrefix?: undefined;
    carrierCode?: undefined;
};
export declare const extractNationalNumber: (number: string, planMetadata: Territory) => {
    nationalNumber: string;
    carrierCode?: undefined;
} | {
    nationalNumber: string;
    carrierCode: string | undefined;
};
