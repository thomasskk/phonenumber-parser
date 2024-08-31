import { valueInObj } from "@thomasskk/node-utils/core";
import metadata from "../metadata.json" with { type: "json" };
import { getNumberType } from "./getCountryByNationalNumber.js";
import type { Territory } from "./schema.js";

export const hasCountryCode = (countryCode: string): boolean => {
	if (valueInObj(countryCode, metadata.countryCodes)) return true;
	if (valueInObj(countryCode, metadata.nonGeographic)) return true;
	return false;
};

export const getPlanMetadata = ({
	countryCode,
}: {
	countryCode: string;
}): Territory => {
	if (valueInObj(countryCode, metadata.countryCodes)) {
		const code = metadata.countryCodes[countryCode][0];

		if (valueInObj(code, metadata.countries)) {
			return metadata.countries[code];
		}
	}

	if (valueInObj(countryCode, metadata.nonGeographic)) {
		return metadata.nonGeographic[countryCode];
	}

	throw new Error(`Unknown country code: ${countryCode}`);
};

export const getExactCountry = (
	countryCode: string,
	nationalNumber: string,
): { country?: string; countryMetadata?: Territory } => {
	if (!valueInObj(countryCode, metadata.countryCodes)) {
		if (valueInObj(countryCode, metadata.nonGeographic)) {
			return {
				countryMetadata: metadata.nonGeographic[countryCode],
			};
		}

		return {};
	}

	const countries = metadata.countryCodes[countryCode];

	for (const country of countries) {
		if (!valueInObj(country, metadata.countries)) continue;
		const countryMetadata = metadata.countries[country];

		if ("leadingDigits" in countryMetadata) {
			if (nationalNumber.search(countryMetadata.leadingDigits) === 0) {
				return {
					country,
					countryMetadata,
				};
			}
		} else if (
			getNumberType({
				nationalNumber,
				countryMetadata,
			})
		) {
			return {
				country,
				countryMetadata,
			};
		}
	}

	if (valueInObj(countries[0], metadata.countries)) {
		return {
			countryMetadata: metadata.countries[countries[0]],
			country: countries[0],
		};
	}

	return {
		country: countries[0],
	};
};

export const toArray = <P>(value: P | P[] | undefined): P[] => {
	if (value === undefined) {
		return [];
	}
	if (Array.isArray(value)) {
		return value;
	}
	return [value];
};
