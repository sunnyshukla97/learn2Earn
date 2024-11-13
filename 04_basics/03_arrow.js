// "This"; keyword-------->>>>>
// "this", refers to the current context!
//'this' keyword inside a function refers to the object that the function is a property of or the object that the function is called on. However, the behavior of the this keyword inside an arrow function is different from regular functions.
//In an arrow function, the this keyword is lexically scoped, meaning it takes on the value of the this keyword in the surrounding code. The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions. 
//It keeps the same value as the this keyword in the surrounding code.

// For example---->>>>

// const user = {
//     username: "sunny",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`);
//         console.log(this);
        
        
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // gives empty {}, in node environment, but gives window as a global object in browser!

// When used alone, 'this' refers to the global object.
// Because 'this' is running in the global scope.
// In a browser window the global object is [object Window]

// let x = this
// console.log(x); // empty {} in the output!

// In strict mode, when used alone, this also refers to the global object:
// "use strict";
// let x = this;
// console.log(x); // -> {}, in the output!

// function chai(){
//     let username = "sunny"
//     console.log(this.username);
    
// }
// chai() // yahan pe this use krne ke baad, output me aata hai "undefined"


// const chai = () => {
//     let username = "sunny"
//     console.log(this.username);
    
// }
// chai() // "undefined"-> output!


// const chai = () => { //glimpse of arrow function!
//     let username = "sunny"
//     console.log(this);
    
// }
// chai()  // {}->output!

// const addTwo = (num1, num2) => { // basic arrow function, also called "explicit" return, wherein we must use "return" if we use {}!
//     return num1 + num2
// }
// console.log(addTwo(3, 4)); // output->7

// implicit return--------->>>>>>>> in this we remove the curly braces, get the work in same line!
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2) // we can use () as well for a implicit return!
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => {Username: 'sunny'}
// console.log(addTwo(3, 4)); // output-undefined!


// const addTwo = () => {Username: 'sunny'}
// console.log(addTwo()); // output-undefined!


// const addTwo = (num1, num2) => ({Username: 'sunny'})
// console.log(addTwo(3, 4)); // output-> { Username: 'sunny' }

// const sayHello = (name, greeting) => console.log(greeting + " " + name);
// sayHello("sunny", "Good evening!")


// Arrow function with "this" keyword! used wherein there is a function inside afunction inside an object!
// const x = {
//     name: "sunny",
//     role: "Js developer",
//     exp: 30,
//     show: function(){
//         // console.log(`${this.name}, welcome to the role of ${this.role}`);
//       setTimeout(() => {
//         console.log(`${this.name}, welcome to the role of ${this.role}`)
//       }, 2000)    
        
  
//     }
// }
// x.show()

// const y = {
//     name: "sammy",
//     age: 26,
//     face: () => {
//         console.log(this.name); // "undefined -> output ye hai!
//         // console.log(this); // '{}' -> output ye hai!
        
        
//     }
// }
// // console.log(y);
// y.face() 

// const y = {
//     name: "sammy",
//     age: 26,
//     face: function(){
//         console.log(this.name); // here ouput comes as "sammy"!
        
//     }
// }
// // console.log(y);
// y.face() 














