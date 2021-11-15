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
