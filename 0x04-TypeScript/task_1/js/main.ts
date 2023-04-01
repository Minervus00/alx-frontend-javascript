interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
	return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
	printTeacher(firstName: string, lastName: string): string;
}

// const teacher3: Teacher = {
// 	firstName: 'John',
// 	fullTimeEmployee: false,
// 	lastName: 'Doe',
// 	location: 'London',
// 	happy: 1,
// };
// console.log(teacher3);

// const director1: Directors = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	location: 'London',
// 	fullTimeEmployee: true,
// 	numberOfReports: 17,
// };
// console.log(director1);

// =================================================

export interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName
	}

	workOnHomework(): string {return 'Currently working';}
	displayName(): string {return this.firstName;}
}

const stud = new StudentClass('John', 'Wick');
console.log(stud.workOnHomework());
console.log(stud.displayName());
