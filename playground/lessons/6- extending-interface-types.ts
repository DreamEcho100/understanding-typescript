interface Person {
	name: string;
	age: number;
}

interface BusinessPerson extends Person {
	salary: number;
}

interface AcademicPerson extends Person {
	publications: string[];
}

const person: AcademicPerson = {
	name: 'Mazen',
	age: 23,
	publications: ['1', '2'],
};

const person2: BusinessPerson = {
	name: 'Mazen',
	age: 21,
	salary: 10000,
};

const logPerson = (person: Person) => console.log(person);

logPerson(person);
logPerson(person2);

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
