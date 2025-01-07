// Objects

// Object Literals
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

// Using the Object constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2021;

console.log(car);
