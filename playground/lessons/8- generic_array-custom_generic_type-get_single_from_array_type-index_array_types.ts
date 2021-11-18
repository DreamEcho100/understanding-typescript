/* ************************************* */
/* * Generic array-custom generic type * */
/* ************************************* */
const logArrayStringOnlyItems = (items: Array<string> /* string[] */) =>
	items.forEach((item) => console.log(item));

logArrayStringOnlyItems(['filip', 'john', 'tom']);

const logArrayItems = <T>(items: T[] /* string[] */) =>
	items.forEach((item) => console.log(item));

logArrayItems<number>([1, 2, 3]);
logArrayItems<string>(['filip', 'john', 'tom']);

/* ******************************** */
/* ** Get single from array type ** */
/* ******************************** */
interface Person {
	name: string;
}

type SingleType<T> = T extends any[] ? T[number] : unknown;

type Type1 = SingleType<string[]>; // type Type1 = string
type Type2 = SingleType<number[]>; // type Type2 = number
type Type3 = SingleType<Person>; // type Type2 = number

type Type4 = string[][number]; // type Type4 = string

/* ********************************* */
/* ******* Index array types ******* */
/* ********************************* */
type CustomArray<T> = {
	[index: number]: T;
};

const items: CustomArray<string> = ['1', '2', '3'];
const item2: CustomArray<number> = [1, 2, 3];
