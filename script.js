function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// this establish prototype inheritance
Employee.prototype = Object.create(Person.prototype); // this will create new object that inherited from person prototype
Employee.prototype.constructor = Employee; //  pointing to  emplyee constructor function

Person.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

const p = Person("Adarsh", 22);
// const e = Employee("Swapnil", 23, "Businessman");

p.greet();
p.jobGreet();


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
