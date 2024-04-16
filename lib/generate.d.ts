import { Territory } from './schema.js';
import { MetadataObject, PhoneNumberTypesData } from './types.js';
export declare const generate: (xmlString: string) => MetadataObject;
export declare const getPhoneNumberTypes: (territory: Territory) => PhoneNumberTypesData;
export declare const getPossibleLenghts: (territory: Territory) => number[];
