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

// Using Object.create()
// Creates an object with a specified prototype
const animal = {
  type: "Mammal",
};

const dog = Object.create(animal);
dog.name = "Buddy";

console.log(dog.type);
console.log(dog.name);

// Accessing Properties

// Dot Notation
console.log(person.name); // Alice

// Bracket Notation
// Useful when the key is dynamic or not a valid JavaScript identifier

const key = "age";
console.log(person[key]);
