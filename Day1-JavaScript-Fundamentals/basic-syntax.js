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
