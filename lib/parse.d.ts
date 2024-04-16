export declare const parse: (text: string) => {
    country?: string;
    phone: string;
    countryCallingCode: string;
    number: string;
    nationalNumber: string;
    carrierCode?: string;
    possible: boolean;
    valid: boolean;
    type?: string;
    ext?: string;
};
