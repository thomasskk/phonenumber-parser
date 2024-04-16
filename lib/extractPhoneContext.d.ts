export declare const PLUS_SIGN = "+";
export declare const RFC3966_PREFIX_ = "tel:";
export declare const RFC3966_PHONE_CONTEXT_ = ";phone-context=";
export declare const RFC3966_ISDN_SUBADDRESS_ = ";isub=";
export declare const extractPhoneContext: (numberToExtractFrom: string) => string | null;
export declare const isPhoneContextValid: (phoneContext: string | null) => boolean;
