(() => {
	let userInput: unknown;
	let userName: string;

	userInput = 5;
	userName = 'Max';

	if (typeof userInput === 'string') {
		userName = userInput;
	}

	console.log('userName: ', userName);

	const generateError = (message: string, code: number): never => {
		throw { message, code };
		// while (true) {}
	};

	generateError('An error occurred', 500);
})();
