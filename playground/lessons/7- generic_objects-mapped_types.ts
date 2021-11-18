const printObjectToTable = (obj: {
	[key: string]: string | number | boolean;
}) => {
	console.table(obj);
};

printObjectToTable({
	age: 21,
	name: 'Mazen',
	isMarried: false,
});
/* ************************************** */
/* ************ Mapped types ************ */
/* ************************************** */
interface Person {
	name: string;
}

type CustomObject<T = string | number | Person> = {
	[key: string]: T;
};

const example: CustomObject = {
	age: 23,
	name: 'asdasd',
	city: 'sadasdasd',
	person: {
		name: 'Mazen',
	},
};
