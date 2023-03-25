class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Person(name=${this.name}, age=${this.age})`;
  }
}

const john = new Person("John", 30);

console.log(john); // Output: Person(name=John, age=30)
