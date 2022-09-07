// let num1: number;
// const num2: number = 2;

// let str: string = '';

// const sumNum = (num1: number | undefined, num2?: number) => {
// 	num1;

// 	if (typeof num1 !== 'number' || typeof num2 !== 'number')
// 		throw new Error('Not a number');

// 	num1 + num2;
// };

// num1 = 21;

// // sumNum(num1, num2)

// sumNum(undefined, num2);

const arr: (number | string | boolean | number[])[] = [];

arr.push(21);
arr.push([21, 22, 23, 24]);
arr.push('ssdadsf');
arr.push(true);

interface IObj {
	a: number;
	b?: string;
}

const obj: IObj = {
	a: 2,
};

obj.b = '09';

type TArrItem =
	| string
	| {
			type: '';
			payload: { type: ''; payload: {} };
	  };

const arr2: TArrItem[] = [];

const handleArr = <T>(arr: T[]): T[] => {
	//

	return arr;
};

handleArr<number>([1, 2, 3, 4]);
handleArr<string>(['filip', 'john', 'tom']);

const func = (value: unknown) => {
	if (typeof value === 'number') value *= 2;
};

const generateError = (message: string | number | boolean, code: number) => {
	// throw { message, code };
	if (typeof message === 'string') return message;
	if (typeof message === 'number') return message;
	if (typeof message === 'boolean') return message;

	// message *= 2;
};

type TKind = 'business' | 'academic' | 'otherType';
type TNum = 99 | 88 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
// interface Person {
//   kind: 'business' | 'academic' | 'otherType';
// 	name: string;
// 	age: number;
// }

// interface Developer extends Person {
// 	kind: 'developer';
//   salary: number;
// }

// interface Person {
// 	birthdate: string;
// }

// const p: Person = {
//   age: 90,
//   name: 'Ali',
//   kind: 'business'
// }

// const k: TKind = ''

// const num3: TNum = 09809

type TArr<T> = T[];

const arr4: TArr<number> = [2];

// type TKind = ''

// interface Person<T = ''> {
// 	kind: T;
// 	name: string;
// 	age: number;
// }

// const pD: Person = {
// 	age: 90,
// 	name: 'Ali',
// 	kind: '',
// };

// pD.

interface Person {
	kind?: 'business' | 'academic' | 'otherType';
	name: string;
	age: number;
}

interface Developer extends Required<Person> {}

const p1: Developer = {
	name: '',
	age: 0,
	kind: 'business',
};

const Component = (
	props: {
		name: string;
		labelText?: string;
		value: string;
	},
	test: string
) => {
	return 0;
};

const Component2 = (props: Parameters<typeof Component>['0']) => {
	// props.
	return 0;
};
