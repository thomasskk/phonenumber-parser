export declare const parseInput: (text: string) => {
    ext?: string;
    number?: string;
};
export declare const parse: (text: string) => {
    country?: string;
    countryCode: string;
    phone: string;
    national: string;
    international: string;
    RFC3966: string;
    E164: string;
    possible: boolean;
    valid: boolean;
    type?: string;
    ext?: string;
};
export declare const parseIncompletePhoneNumber: (str?: string) => string;
