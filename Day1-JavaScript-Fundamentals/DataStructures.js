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
let fruits = ["apple", "banana", "cherry", "date"];

// Using the array constructor
let numbers = new Array(10, 20, 30);

// Empty array
let emptyArray = [];

// Array.of(): Creates a new array from its arguments
let arr2 = Array.of(10); // [10]

// Array.from(): Creates an array from an iterable object like a string, set, map, or arguments object.
// Also allows mapping

// Converting a string into an array
let strArr = Array.from("hello");
console.log("strArr", strArr); // [ 'h', 'e', 'l', 'l', 'o' ]

// Create an array with a mapping function
let squares = Array.from([1, 2, 3], (x) => x ** 2);
console.log("squares", squares); // [1, 4, 9]

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

// Finding elements

// indexOf(): Finds the index of the first occurrence of a value
let animals = ["dog", "cat", "bird"];
console.log(animals.indexOf("cat")); // 1

// includes(): Checks if an array contains a value
console.log(animals.includes("cat")); // true

// find(): Returns the first element that matches a condition
let found = numberArray.find((num) => num > 2); // 3

// findIndex(): Returns the index of the first matching element
let index = numberArray.findIndex((num) => num > 2); // 2

// Sorting and Reversing

// sort(): Sorts elements (alphabetically by default).

let letters = ["b", "a", "c"];
letters.sort(); // ['a', 'b', 'c']

// sort() with comparator function
let numbersToSort = [10, 2, 33, 4, 15];

arr.sort((a, b) => {
  // Return a negative value if 'a' should come before 'b'
  // Return a positive value if 'a' should come after 'b'
  // Return 0 if 'a' and 'b' are equal
});

// Ascending order (smallest to largest)
numbersToSort.sort((a, b) => a - b);
console.log(numbersToSort);

// Descending order (largest to smallest)
numbersToSort.sort((a, b) => b - a);
console.log(numbersToSort); // [33, 15, 10, 4, 2]

// Sorting strings alpahbetically
// For strings, sort() works without a comparator function because it sorts alphabetically by default
fruits.sort();
console.log("fruits", fruits); // ['apple', 'banana', 'cherry', 'date']

// Sorting an array of objects by a property

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 },
];

// Sorting by price (ascending)
products.sort((a, b) => a.price - b.price);
console.log(products);

// Sorting by price (descending)
products.sort((a, b) => b.price - a.price);
console.log(products);

// Sorting by a string property
products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);

// Sorting with a custom condition
// Sorting even numbers before odd numbers
let numArr = [5, 3, 8, 1, 4, 7, 2];
numArr.sort((a, b) => {
  if (a % 2 === 0 && b % 2 !== 0) return -1; // a: even, b: odd
  if (a % 2 !== 0 && b % 2 !== 0) return 1; // a: odd, b: even
  return a - b; // If both are even or both are odd, sort in ascending order
});

// Sorting by multiple conditions
// Sorting by age, then by name

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "Diana", age: 20 },
];

// Sort by age (ascending), and if ages are equal, sort by name (alphabetically)
people.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  return a.name.localeCompare(b.name);
});

console.log(people);

// Reverse alphabetical order
fruits.sort((a, b) => b.localeCompare(a));
console.log("fruits", fruits); // ['date', 'cherry', 'banana', 'apple']

// In-place sorting
// sort() method modifies the original array.
// To preserve the original array, make a copy
let original = [3, 1, 4, 2];
let sorted = [...original].sort((a, b) => a - b);
console.log(original); // [3, 1, 4, 2]
console.log(sorted); // [1, 2, 3, 4]

// reverse(): Reverses the array order.
letters.reverse(); // ['c', 'b', 'a']

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Find an user by id
let user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: 'Bob }

// Add a new user
users.push({ id: 4, name: "Diana" });
console.log(users);

// Remove a user
let userIndex = users.findIndex((user) => user.id === 1);
if (userIndex !== -1) users.splice(userIndex, 1);
console.log(users);

// Iteration Methods

// keys(), values(), entries()

let colors = ["red", "green", "blue"];

// keys()
for (let key of colors.keys()) {
  console.log(key); // 0, 1, 2
}

// values()
for (let value of colors.values()) {
  console.log(value); // 'red', 'green', 'blue'
}

// entries()
for (let [index, color] of colors.entries()) {
  console.log(`${index}: ${color}`);
}
// 0: red
// 1: green
// 2: blue

// reduce() and reduceRight()

// reduce(): Reduces an array to a single value from left-to-right
// reduceRight(): Works like reduce(), but iterates from right-to-left

let nums2 = [1, 2, 3, 4, 5];

// Sum of all numbers
let sum = nums2.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Right-to-left reduction
let diff = nums2.reduceRight((acc, curr) => acc - curr);
console.log(diff); // -5

// some() and every()
// some(): Checks if at least one element satisfies a condition
// every(): Checks if all elements satisfy a condition

let numbers2 = [1, 2, 3, 4, 5];

// Check if any number is greater than 3
console.log(numbers2.some((num) => num > 3)); // true

// Check if all numbers are less than 10
console.log(numbers2.every((num) => num < 10)); // true

// flat() and flatMap()
// flat(): flattens nested arrays into a single-level array
// flatMap(): maps each element and flattens the result

let nested = [1, [2, 3], [4, [5]]];
let nestedTwo = [1, [2, [3, [4, [5]]]]];

// Flatten one level deep
console.log(nested.flat()); // [1, 2, 3, 4, [5]]
console.log(nestedTwo.flat()); // [ 1, 2, [ 3, [ 4, [Array] ] ] ]

// Flatten all levels
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5]

let words = ["hello world", "foo bar"];

// Map and flatten
console.log(words.flatMap((word) => word.split(" ")));
// ['hello', 'world', 'foo', 'bar']
