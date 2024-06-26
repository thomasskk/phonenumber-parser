import type { Territory } from "./schema.js";
import type { PhoneNumberType } from "./types.js";
type NumberLengthType = "TOO_SHORT" | "TOO_LONG" | "IS_POSSIBLE" | "INVALID_LENGTH";
export declare const checkNumberLengthForType: (nationalNumber: string, planMetadata: Territory, type?: PhoneNumberType) => NumberLengthType;
export {};
