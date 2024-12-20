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
