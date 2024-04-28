import { PHONE_NUMBER_TYPES } from "./constants.js";
import type { Territory } from "./schema.js";
import type { PhoneNumberTypesData } from "./types.js";

export const getPhoneNumberTypes = (
	territory: Territory,
): PhoneNumberTypesData => {
	return PHONE_NUMBER_TYPES.reduce((output, type) => {
		const territoryType = territory[type];
		if (!territoryType) return output;
		const pattern = territoryType?.nationalNumberPattern.replace(/\s/g, "");
		const possibleLengths = parsePossibleLengths(
			territoryType.possibleLengths.national,
		);

		if (pattern) {
			output[type] = {
				pattern,
				possibleLengths,
			};
		}
		return output;
	}, {} as PhoneNumberTypesData);
};

const parsePossibleLengths = (possibleLengthString: string) => {
	const lengths: number[] = [];

	for (const length of possibleLengthString.split(",")) {
		if (!length.trim()) throw new Error();

		const rangeMatch = length.match(/^\[(\d+)-(\d+)\]$/);
		if (rangeMatch) {
			const [, min, max] = rangeMatch.map(Number);
			if (max - min < 2) throw new Error();

			for (let i = min; i <= max; i++) {
				if (lengths.includes(i)) throw new Error();
				lengths.push(i);
			}
		} else {
			const num = Number(length);
			if (Number.isNaN(num) || lengths.includes(num)) throw new Error();
			lengths.push(num);
		}
	}

	return lengths;
};
