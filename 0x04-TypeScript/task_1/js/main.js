"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () { return 'Currently working'; };
    StudentClass.prototype.displayName = function () { return this.firstName; };
    return StudentClass;
}());
var stud = new StudentClass('John', 'Wick');
console.log(stud.workOnHomework());
console.log(stud.displayName());
