import { NumberFormatElement, Territory } from './schema.js';
import { Format } from './types.js';
export declare const format: ({ format, nationalNumber, countryCode, planMetadata, ext, }: {
    country?: string;
    format: Format;
    nationalNumber: string;
    countryCode: string;
    planMetadata: Territory;
    ext?: string;
}) => string;
export declare const chooseFormatForNumber: (availableFormats: Territory['availableFormats'], nationalNnumber: string) => NumberFormatElement | undefined;
