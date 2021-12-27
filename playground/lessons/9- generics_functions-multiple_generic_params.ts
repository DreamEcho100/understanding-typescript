// Generics

// type Example<T> = (a: T, b: T) => {};

// const example infer Example = <T>(a: T[], b: T[]) => {};

// interface DifferenceInterface<T> {
// 	array1: T[],
// 	array2: T[],
//   options: {
// 		noDuplicates: boolean;
// 	}
// }

// type DifferenceType<T> = (
//   array1: T[],
//   array2: T[],
//   options?: {
//     noDuplicates?: boolean;
//   }
// ) => ({
// 		removed: T[],
// 		added: T[],
// 	})

type DifferenceOptions = {
	noDuplicates?: true;
};

const DifferenceDefaults: DifferenceOptions = {
	noDuplicates: true,
};

const difference = <T>(
	array1: T[],
	array2: T[],
	{ noDuplicates = true }: DifferenceOptions = DifferenceDefaults
) => {
	const arr1: T[] = noDuplicates ? [...new Set(array1)] : array1;
	const arr2: T[] = noDuplicates ? [...new Set(array2)] : array2;

	const removed: T[] = [];
	const added: T[] = [];

	if (arr1.length > arr2.length) {
		arr1.forEach((item, index) => {
			if (arr2.indexOf(item) === -1) removed.push(item);

			if (index < arr2.length && arr1.indexOf(arr2[index]) === -1)
				added.push(arr2[index]);
		});
	} else {
		arr2.forEach((item, index) => {
			if (arr1.indexOf(item) === -1) added.push(item);

			if (index < arr1.length && arr2.indexOf(arr1[index]) === -1)
				removed.push(arr1[index]);
		});
	}

	return {
		removed,
		added,
	};
};

const arr1 = [1, 2, 2, 3, 4];
const arr2 = [1, 2, 3];
const arr3 = [1, 3, 33];
const arr4 = [1, 5, 3, 44];
const arr5 = [1, 2, 3, 5];
const arr6 = [66, 2, 3, 6, 5];

console.log(difference<number>(arr1, arr2)); // { removed: [ 4 ], added: [] }
console.log(difference<number>(arr1, arr3)); // { removed: [ 2, 4 ], added: [ 33 ] }
console.log(difference<number>(arr1, arr4)); // { removed: [ 2, 4 ], added: [ 5, 44 ] }
console.log(difference<number>(arr1, arr5)); // { removed: [ 4 ], added: [ 5 ] }
console.log(difference<number>(arr1, arr6)); // { removed: [ 1, 4 ], added: [ 66, 6, 5 ] }

/* ************************************* */
/* ****** Multiple generic params ****** */
/* ************************************* */
type Logger<FP = string, SP = number, RT = string> = (
	param1: FP,
	param2: SP
) => RT;

const superLogger: Logger<string, number, string> = (name, age) => {
	return 'Hello World!';
};

const logger: Logger = (brand, age) => {
	return brand + age;
};
