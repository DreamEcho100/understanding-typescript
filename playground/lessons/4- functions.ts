(() => {
	const add = (n1: number, n2: number): number => {
		return n1 + n2;
	};

	const printResult = (num: number): void => {
		console.log('Result: ' + num);
	};

	const addDndHandle = (
		num1: number,
		num2: number,
		cb: (number1: number, number2: number) => void
	): void => {
		console.log(true);
		cb(num1, num2);
	};

	printResult(add(5, 12));

	let combinedValues: (a: number, b: number) => number;

	combinedValues = add;

	// combinedValues = printResult;
	// Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
	//   Type 'void' is not assignable to type 'number'.

	console.log('combinedValues(8, 8): ', combinedValues(8, 8));

	console.log('addDndHandle');
	addDndHandle(8, 7, (num1: number, num2: number): void => {
		console.log('num1, num2', num1, num2);
	});
})();
