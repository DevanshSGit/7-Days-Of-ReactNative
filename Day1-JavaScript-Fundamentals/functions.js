// Function Declarations
// Hoisted

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// Function Expressions
// Not hoisted

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3));

// Arrow Functions
// Not hoisted
// No binding for this

const subtract = (a, b) => a - b;

console.log(subtract(4, 3));

// Multi-line arrow function
const divide = (a, b) => {
  if (b === 0) return "Cannot divide by 0";
  return a / b;
};

console.log(divide(10, 2));

// Immediately Invoked Function Expressions (IIFE)
// Executed immediately after being defined

(function () {
  console.log("This is an IIFE!");
})();

(() => {
  console.log("Arrow IIFE!");
})();

// Object Methods

const calc = {
  add(a, b) {
    return a + b;
  },
  subtract: (a, b) => a - b,
};

console.log(calc.add(2, 4));
console.log(calc.subtract(4, 2));

// Class Methods

class Sport {
  constructor(name) {
    this.name = name;
  }
  sport() {
    console.log(`${this.name} is an intense sport.`);
  }
}

const football = new Sport("Football");
football.sport();

// Closures
// Remembers the scope they were created in, even after exiting it

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());

/* ** ** ** ** ** ** */
/* The 'this' keyword */

// Global Context

// In global context, 'this' refers to the global object
// In browsers, window and in Node.js, global

console.log("this", this); // {}

// Function Context

function regularFunction() {
  console.log(this); // global
}

regularFunction();

// Object Context

const obj = {
  name: "Object",
  showName: function () {
    console.log(this.name); // Object
  },
};

obj.showName();

// Assigning the method to a variable and calling it will lose the object context

const objMethod = obj.showName;
objMethod(); // undefined (or global object)

// Arrow Functions
// Arrow functions don't have their own this. Instead, they inherit this from their enclosing lexical scope.

const objTwo = {
  name: "Object",
  arrowFunction: () => {
    console.log(this.name);
  },
};
objTwo.arrowFunction();

// When used within a method, an arrow function inherits 'this' from the enclosing function

const objThree = {
  name: "Object",
  method: function () {
    const arrowFun = () => {
      console.log(this.name); // "Object"
    };
    arrowFun();
  },
};
objThree.method();

// Class Context

// Within a class, this refers to the specific instance of the class

class MyClass {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

const instance = new MyClass("Class Instance");
instance.showName(); // "Class Instance"

// Constructor Functions

// When using a constructor function, this refers to the newly created object

function Person(name) {
  this.name = name;
}

const person1 = new Person("Josh");
console.log(person1.name); // "Josh"
