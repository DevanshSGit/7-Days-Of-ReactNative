// Understanding Scope
/* Scope determines the accessibility of variables, objects, and functions in different
parts of code. It defines where variables can be declared, accessed and modified. 
*/
/* Global Scope */
/* Variables declared outside any function or block have global scope and can be accessed from anywhere in the code. */

let globalVariable = "I am a global variable";

function printGlobal() {
  console.log(globalVariable); // accessible here
}

printGlobal();
console.log(globalVariable); // accessible here

/* Function Scope */
/* Variables declared inside a function are only accessible within that function */

function functionScope() {
  let functionVariable = "I exist only in this function";
  console.log(functionVariable);
}

functionScope();

/* Block Scope */
/* Variables declared with let or const inside a block ({...}) are only accessible within that block */

{
  var a = "Variable A";
  let b = "Variable B";
  const c = "Variable C";
}

console.log("a..", a);
// console.log("b..", b); // error: b is not defined
// console.log("c..", c); // error: c is not defined

/* ---------- */

/* Comparison of let, var and const */

/* Declaration and Scope */
/* var: Function-scoped */
/* let and const: Block-scoped */

function testScope() {
  if (true) {
    var variableOne = "I am var";
    let variableTwo = "I am let";
    const variableThree = "I am const";
  }
  console.log(variableOne);
  // console.log(variableTwo); // Error: variableTwo is not defined
  // console.log(variableThree); // Error: variableThree is not defined
}

/* Re-declaration */
/* var: Can be re-declared in the same scope */
/* let and const: Cannot be re-declared in the same scope */

var x = 10;
var x = 20; // Allowed
console.log(x);

let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared

const z = 10;
// const z = 20; // Error: Identifier 'z' has already been declared

/* Re-assignment */
/* var and let: can be re-assigned */
/* const: cannot be re-assigned */
var m = 10;
x = 20; // allowed
console.log(x); // Output: 20

let n = 10;
n = 20; // allowed
console.log(n); // Output: 20

const p = 10;
// p = 20; // Error: Assignment to constant variable
console.log(p); // Output: 10

/* Hoisting */
/* var: Hoisted to the top of its scope and initialized as undefined */
/* let and const: Hoisted but remain in the 'Temporal Dead Zone' until their declaration is encountered */

console.log(varVar); // Output: undefined
// console.log(letVar); // Error: Cannot access 'letVar' before initialization
// console.log(constVar); // Error: Cannot access 'constVar' before initialization

var varVar = "I am var";
let letVar = "I am let";
const constVar = "I am const";

/* Global Object Property */
/* var: Declared variables become properties of the global object (window in browsers) */
/* let and const: Do not become properties of the global object */

var globalVar = "I am var";
let globalLet = "I am let";
const globalConst = "I am const";

console.log(window.globalVar); // Output: I am var
console.log(window.globalLet); // Output: undefined
console.log(window.globalConst); // Output: undefined

/* Usage in Loops */
/* var: The value is shared across iterations */
/* let: Each iteration gets a new scope */
/* const: Useful in loops if the value does not need re-assignment */

// Using var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output after 1 second: 3, 3, 3 (var shares the same variable)

// Using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// Output after 1 second: 0, 1, 2 (let creates a new variable for each iteration)

// Using const
for (const x of [1, 2, 3]) {
  console.log(x);
}
// Output: 1, 2, 3 (const works for non-reassigned loop variables)

/* Constant References in const */
/* const: The variable binding cannot be changed, but the contents of objects and arrays
declared with const can be modified */

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // Output: [1, 2, 3, 4]

// arr = [5, 6]; // Error: Assignment to constant variable

const obj = { name: "John" };
obj.age = 25; // Allowed
console.log(obj); // Output: { name: "John", age: 25 }

// obj = { name: "Mark" }; // Error: Assignment to constant variable

// Hoisting and TDZ
