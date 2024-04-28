import type { NumberFormatElement } from "./schema.js";
export declare const FIRST_GROUP_PATTERN: RegExp;
export declare const formatNationalNumberUsingFormat: (number: string, format: NumberFormatElement, useInternationalFormat: boolean, withNationalPrefix: boolean, nationalPrefix?: string) => string;
