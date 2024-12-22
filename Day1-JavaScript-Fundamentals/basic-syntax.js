// Understanding Scope
/* Scope determines the accessibility of variables, objects, and functions in different
parts of code. It defines where variables can be declared, accessed and modified. 
*/
/* Global Scope */
/* Variables declared outside any function or block have global scope and can be accessed from anywhere in the code. */

let globalVar = "I am a global variable";

function printGlobal() {
  console.log(globalVar); // accessible here
}

printGlobal();
console.log(globalVar); // accessible here

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
