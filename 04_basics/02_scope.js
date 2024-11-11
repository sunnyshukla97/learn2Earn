// let a = 10
// const b = 20
// var c = 30

//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
} 

// if(true){
//     let a = 10
//     const b = 20
//      c = 30 // tb v print hoga scope ke bahar!
// }


console.log(a); // ye print nhi hoga.
// console.log(b); // ye v print nhi hoga.
// console.log(c); // lekin "var" ke sath print hoga!



// Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:--->>>>
//    1) Block scope
//    2) Function scope
//    3) Global scope

// Block scope->
// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:


// Example ---->>>>
// {
//   let x = 2;
// }
// x can NOT be used here

// Variables declared with the 'var' keyword can NOT have block scope.
// Variables declared inside a { } block with "var" can be accessed from outside the block.
// {
//     var x = 2;
//   }
  // x CAN be used here

//   Local Scope ->>>>

//   Variables declared within a JavaScript function, are LOCAL to the function:
//   Example
  // code here can NOT use carName
  
//   function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
//   }
  
  // code here can NOT use carName 

//   Local variables have Function Scope:
//   They can only be accessed from within the function


// Function scope---->>>>
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:
// function myFunction() {
//   var carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   let carName = "Volvo";   // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo";   // Function Scope
// }



// Global scope-------------->>>>>>>>
// A variable declared outside a function, becomes GLOBAL.
// Example
// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
// // code here can also use carName
// }

// A global variable has Global Scope:
// All scripts and functions on a web page can access it

// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:
