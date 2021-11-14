(() => {
	() => {
		const add = (
			numbers: number[],
			showResult: boolean | void,
			returned: boolean = true,
			phrase: string = ''
		): number | void => {
			const result = numbers.reduce(
				(previousNum: number, currentNum: number) => previousNum + currentNum,
				0
			);

			if (showResult) console.log(`${phrase}${result}`);

			if (returned) return result;
		};

		let number1: number;
		number1 = 5;
		const number2: number = 2.8;
		const number3: number =
			parseFloat(prompt('Enter a number to add as an extra?')) || 0;

		const sum = add(
			[number1, number2, number3],
			true,
			false,
			`${[number1, number2, number3].join(' + ')} = `
		);
	};

	/* ************************ */
	/* ************************ */
	/* ************************ */

	(() => {
		interface ArgsInterface {
			numbers: number[];
			showResult: boolean | void;
			returned: boolean;
			phrase: string;
		}

		// const add = (
		// 	numbers: number[],
		// 	showResult: boolean | void,
		// 	returned: boolean = true,
		// 	phrase: string = ''
		// ): number | void => {
		// 	const result = numbers.reduce(
		// 		(previousNum: number, currentNum: number) => previousNum + currentNum,
		// 		0
		// 	);

		// 	if (showResult) console.log(`${phrase}${result}`);

		// 	if (returned) return result;
		// };

		let number1: number;
		number1 = 5;
		const number2: number = 2.8;
		const number3: number = 0; // parseFloat(prompt('Enter a number to add as an extra?')) || 0;

		const args: ArgsInterface = {
			numbers: [number1, number2, number3],
			showResult: true,
			returned: false,
			phrase: `${[number1, number2, number3].join(' + ')} = `,
		};

		let i: number;

		for (i = 0; i < args.numbers.length; i++) {
			console.log(
				`In the position of ${i} in the array args = ${args.numbers[i]}`
			);
			// args.numbers[i].map // Will result in an error in development time!
		}

		// const sum = add(
		// );
	})();
})();
