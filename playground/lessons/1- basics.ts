(() => {
	const add = (n1: number, n2: number) => {
		return n1 + n2;
	};

	const number1: number = 5;
	const number2: number = 2.8;

	const sum = add(number1, number2);

	console.log(`The sum of ${number1} and ${number2} = ${sum}`);
})();
