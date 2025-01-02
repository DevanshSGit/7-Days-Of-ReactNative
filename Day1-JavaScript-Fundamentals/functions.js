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

const subtract = (a, b) => a - b;

console.log(subtract(4, 3));

// Multi-line arrow function
const divide = (a, b) => {
  if (b === 0) return "Cannot divide by 0";
  return a / b;
};

console.log(divide(10 / 2));
