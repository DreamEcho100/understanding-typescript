(() => {
	enum Role {
		ADMIN,
		READ_ONLY,
		AUTHOR,
	}

	const person: {
		name: string;
		age: number;
		hobbies: string[];
		// role: [number, string];
		role: Role;
	} = {
		name: 'omar',
		age: 31,
		hobbies: ['Sports', 'Cooking'],
		// role: [2, 'author'],
		role: Role.ADMIN,
	};

	// person.role[1] = 10;
	// Type 'number' is not assignable to type 'string'.

	console.log('Role', Role);
	console.table(person);
})();
