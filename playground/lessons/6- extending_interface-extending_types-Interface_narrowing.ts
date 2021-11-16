interface Person {
	kind: 'business' | 'academic' | 'otherType';
	name: string;
	age: number;
}

interface Person {
	randomNum: number;
}

interface BusinessPerson extends Person {
	kind: 'business';
	salary: number;
}

interface AcademicPerson extends Person {
	kind: 'academic';
	publications: string[];
}

const person: AcademicPerson = {
	randomNum: parseFloat(Math.random().toFixed(2)),
	kind: 'academic',
	name: 'Mazen',
	age: 23,
	publications: ['1', '2'],
};

const person2: BusinessPerson = {
	randomNum: parseFloat(Math.random().toFixed(2)),
	kind: 'business',
	name: 'Mazen',
	age: 21,
	salary: 10000,
};

type Human =
	| BusinessPerson
	| AcademicPerson
	| { kind: 'otherType'; special: string };

const person3: Human = {
	kind: 'otherType',
	special: 'Lorem',
};

const logPerson = (
	person: BusinessPerson | AcademicPerson /*| Person*/ | Human
) => {
	console.log(person);

	if (person.kind === 'academic')
		console.log('publications', person.publications);
	else if (person.kind === 'business') console.log('salary', person.salary);
	else if (person.kind === 'otherType') console.log('special', person.special);
	else console.log(person);
};

logPerson(person);
logPerson(person2);
logPerson(person3);

/* ************************ */
/* ************************ */
/* ************************ */
type Car = {
	name: string;
};

type RaceCar = {
	speed: number;
} & Car & { mileage: number };

const car: RaceCar = {
	name: 'my car',
	speed: 350,
	mileage: 200,
};

const logCar = (car: Car) => console.log(car);
logCar(car);
