function testValues(param, value) {
  const isString = (num) => typeof num === 'string';

  if (param === 'Name') {
    if (isString(value)) {
      return value;
    }
    throw TypeError('Name must be a string');
  }

  if (param === 'Length') {
    if (typeof value === 'number') {
      return value;
    }
    throw TypeError('Length must be a number');
  }

  if (param === 'Students') {
    if (Array.isArray(value) && value.every(isString)) {
      return value;
    }
    throw TypeError('Students must be an array of strings');
  }

  return undefined;
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = testValues('Name', name);
    this._length = testValues('Length', length);
    this._students = testValues('Students', students);
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(val) {
    this._name = testValues('Name', val);
  }

  set length(val) {
    this._length = testValues('Length', val);
  }

  set students(val) {
    this._students = testValues('Students', val);
  }
}
