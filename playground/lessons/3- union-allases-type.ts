(() => {
	type CombineInput = number | string;
	type CombineResultConversion = 'as-number' | 'as-text';

	const combine = (
		input1: CombineInput,
		input2: CombineInput,
		resultConversion: CombineResultConversion
	) => {
		let result;

		if (
			(typeof input1 === 'number' && typeof input2 === 'number') ||
			resultConversion === 'as-number'
		)
			result = +input1 + +input2;
		else result = input1.toString() + input2.toString();

		return result;
	};

	const combinedAges: number | string = combine(30, 21, 'as-number');
	console.log('combinedAges', combinedAges);

	const combinedStringAges: number | string = combine(30, 21, 'as-text');
	console.log('combinedStringAges', combinedStringAges);

	const combinedNames: number | string = combine('Ali', 'Alaa', 'as-text');
	console.log('combinedNames', combinedNames, 'as-text');
})();
