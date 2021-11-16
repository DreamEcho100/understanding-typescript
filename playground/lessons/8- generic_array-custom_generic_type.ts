const logArrayStringOnlyItems = (items: Array<string> /* string[] */) =>
	items.forEach((item) => console.log(item));

logArrayStringOnlyItems(['filip', 'john', 'tom']);

const logArrayItems = <T>(items: T[] /* string[] */) =>
	items.forEach((item) => console.log(item));

logArrayItems<number>([1, 2, 3]);
logArrayItems<string>(['filip', 'john', 'tom']);
