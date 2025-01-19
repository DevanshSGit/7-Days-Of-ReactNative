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

// Parsing JSON to Objects

const json = '{"name": "Alice", "age": 25}';
const parsedObj = JSON.parse(json);
console.log(parsedObj);

/* * * * * * * * */

// Declaring an array

// Using array literal
let fruits = ["apple", "banana", "cherry"];

// Using the array constructor
let numbers = new Array(10, 20, 30);

// Empty array
let emptyArray = [];

// Mixed data types
let mixedArray = [42, "hello", true, null];

// Properties and methods

// Length

let nums = [10, 20, 30];
console.log(nums.length);

// Adding Elements

// push(): Adds an element at the end of the array
// unshift(): Adds an element to the beginning of the array

let arr = [1, 2, 3, 4];
arr.push(5); // [1, 2, 3, 4, 5]
arr.unshift(0); // [0, 1, 2, 3, 4, 5]

console.log(arr.length);

// Removing elements

// pop(): Removes the last element
// shift(): Removes the first element

arr.pop(); // [0, 1, 2, 3, 4]
arr.shift(); // [1, 2, 3, 4]

// Iterating over arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits);
}

// for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach(): Executes a function for each array element
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// Transforming arrays

// map(): Creates a new array by applying a function to each element
let numberArray = [1, 2, 3];
let squaredNumbers = numberArray.map((num) => num * num); // [1, 4, 9]

// filter(): Creates a new array with elements that pass a condition.
let evenNumbers = numberArray.filter((num) => num % 2 === 0); // [2]
