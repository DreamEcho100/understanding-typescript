interface Person {
	name: string;
}

interface Student extends Person {
	age: number;
}

type StudentInfo<T extends any = Student> = T extends Student
	? {
			data: T;
			grades: number[];
	  }
	: string;

const logStudentInfo = (info: StudentInfo<Student>) => console.log(info);

const studentInfo = {
	data: {
		name: 'MAzen',
		age: 21,
	},
	grades: [8, 7, 9, 7],
};

logStudentInfo(studentInfo);
