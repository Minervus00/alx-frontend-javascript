interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Alberto',
	lastName: 'James',
	age: 18,
	location: 'Moscou',
};

const student2: Student = {
	firstName: 'Francis',
	lastName: 'Boutou',
	age: 30,
	location: 'Paris',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((stud) => {
	let tr = table.insertRow();

	tr.insertCell().innerText = stud.firstName;
	tr.insertCell().innerText = stud.location;
});
