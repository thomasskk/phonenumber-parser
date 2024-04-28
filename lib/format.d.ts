import type { Territory } from "./schema.js";
import type { Format } from "./types.js";
export declare const format: ({ format, nationalNumber, countryCode, planMetadata, ext, }: {
    country?: string;
    format: Format;
    nationalNumber: string;
    countryCode: string;
    planMetadata: Territory;
    ext?: string;
}) => string;
