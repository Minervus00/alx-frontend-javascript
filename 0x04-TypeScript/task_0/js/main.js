var student1 = {
    firstName: 'Alberto',
    lastName: 'James',
    age: 18,
    location: 'Moscou',
};
var student2 = {
    firstName: 'Francis',
    lastName: 'Ngannou',
    age: 30,
    location: 'Paris',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (stud) {
    var tr = table.insertRow();
    tr.insertCell().innerText = stud.firstName;
    tr.insertCell().innerText = stud.location;
});
