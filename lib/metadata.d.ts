import { Territory } from './schema.js';
import { MetadataObject } from './types.js';
export declare class Metadata {
    metadata: MetadataObject;
    constructor(metadata: MetadataObject);
    hasCallingCode(callingCode: string): boolean;
    isNonGeographicCallingCode(callingCode: string): boolean;
    getPlanMetadata({ callingCode }: {
        callingCode: string;
    }): Territory;
    getExactCountry(callingCode: string, nationalNumber: string): {
        country?: string;
        countryMetadata?: Territory;
    };
}
