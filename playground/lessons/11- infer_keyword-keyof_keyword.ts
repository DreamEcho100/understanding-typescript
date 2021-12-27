/* ************************************* */
/* *********** Infer keyword *********** */
/* ************************************* */
type ReturnedType<T> = T extends () => infer R ? R : unknown;

const logTrue = () => true; // const logTrue: () => boolean

const logTrueReturn:
  ReturnType<typeof logTrue> // boolean
  = true;

/* ************************************* */
/* *********** keyof keyword *********** */
/* ************************************* */
interface Person {
	name: string;
	age: number;
	grades: number[];
}

type PersonKey = keyof Person;

const personKey: PersonKey = 'grades';
