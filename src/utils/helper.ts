export const ucwords = (string: string) =>
	string.toLowerCase().replace(/(?<= )[^\s]|^./g, (a) => a.toUpperCase());
