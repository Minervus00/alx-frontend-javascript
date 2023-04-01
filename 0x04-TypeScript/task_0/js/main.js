var student1 = {
    firstName: 'Alberto',
    lastName: 'James',
    age: 18,
    location: 'Moscou',
};
var student2 = {
    firstName: 'Francis',
    lastName: 'Boutou',
    age: 30,
    location: 'Paris',
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(function (stud) {
    var tr = table.insertRow();
    var nameCell = tr.insertCell();
    var locationCell = tr.insertCell();
    nameCell.innerText = stud.firstName;
    locationCell.innerText = stud.location;
    table.setAttribute('style', 'border: dashed 1px red');
    nameCell.setAttribute('style', 'border: dashed 1px red');
    locationCell.setAttribute('style', 'border: dashed 1px red');
});
