export const matchesEntirely = (text = "", regular_expression?: string) => {
	return new RegExp(`^(?:${regular_expression})$`).test(text);
};
