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

// Modifying Objects

// Adding/Updating Properties

person.hobby = "Reading";
person.age = 26;

console.log(person.hobby);
console.log(person.age);

// Deleting properties
delete person.isStudent;
console.log(person.isStudent); // Undefined

// Checking properties

// Using in Operator
console.log("name" in person); // true
console.log("salary" in person); // false

// Enumerating Properties

// for...in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys()
// Returns an array of keys

console.log(Object.keys(person)); // [ 'name', 'age', 'greet', 'hobby' ]

// Object.values()
// Returns an array of values

console.log(Object.values(person)); // [ 'Alice', 26, [Function: greet], 'Reading' ]

// Object.entries()
// Returns an array of [key, value] pairs

console.log(Object.entries(person));
// [
//     [ 'name', 'Alice' ],
//     [ 'age', 26 ],
//     [ 'greet', [Function: greet] ],
//     [ 'hobby', 'Reading' ]
//  ]

// Converting Objects to JSON

const personObj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(personObj);
console.log(jsonString);
