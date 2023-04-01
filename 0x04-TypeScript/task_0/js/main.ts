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
	const tr = table.insertRow();
	const nameCell = tr.insertCell();
	const locationCell = tr.insertCell();

	nameCell.innerText = stud.firstName;
	locationCell.innerText = stud.location;
	table.setAttribute('style', 'border: dashed 1px red');
	nameCell.setAttribute('style', 'border: dashed 1px red');
	locationCell.setAttribute('style', 'border: dashed 1px red');
});
