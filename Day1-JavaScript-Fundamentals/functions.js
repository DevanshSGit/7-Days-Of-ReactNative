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

console.log("this", this);
