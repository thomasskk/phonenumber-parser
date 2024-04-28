import { getPhoneNumberTypes } from "./getPhoneNumberTypes.js";
import type { Territory } from "./schema.js";
import type { PhoneNumberType } from "./types.js";

export const getPossibleLenghts = (territory: Territory) => {
	const types = getPhoneNumberTypes(territory);

	const possibleLengths: number[] = [];

	for (const type of Object.keys(types)) {
		const typePossibleLengths = types[type as PhoneNumberType]?.possibleLengths;

		for (const i of typePossibleLengths) {
			possibleLengths.push(i);
		}

		types[type as PhoneNumberType].possibleLengths = typePossibleLengths;
	}

	return possibleLengths.sort((a, b) => a - b);
};
