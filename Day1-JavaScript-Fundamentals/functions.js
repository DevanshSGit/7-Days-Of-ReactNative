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
