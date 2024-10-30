// Primitive Datatype- memory me inka reference directly allocate nhi kiya ja sakta hai, inka copy bnta hai.
// 7 types- String, Number, Boolean, null, undefined, symbol, BigInt


// Non-Primitive datatype(Reference)- memory me inka reference directly allocate kiya ja sakta hai.
// Array, Objects, functions.

// primitive type examples->
// const score = 46
// const scoreValue = 100.33 -> there's no any special type for float type data in js.
// const temp = null
// console.log(temp); - output = null
// console.log(typeof temp); type = object

// const isLoggedIn = false
// console.log(isLoggedIn);

// Symbol ----> for unique things we use symbol-
// const Id = "123"
// const anotherId = "123"
// console.log(Id === anotherId); - when we didn't use symbol, output came as true.

// const Id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(Id === anotherId); - when we used symbol, output came as false.

// BigInt - used for very large numbers-

// const BigNumber = 3446352210089676n //- we use "n" at the end for bigint.
// console.log(BigNumber);
// console.log(typeof BigNumber);


// Non-primitive type (array, objects, functions) examplse ->
// example 1) array -
// const heroes = ["shaktiman", "krrish", "batman"];
// console.log(typeof heroes);


// example 2) objects -
// let myObj = {
//     name: "sunny",
//     age : 26
// } 
// console.log(typeof myObj);

// objects are under curly braces & in key vale pairs.

// example 3) functions -
// const myFunction = function(){
//     console.log("hello world");
    
// } //-> we can store functions in a variable as well in js, above is a way of declaration of a function.
// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory are of 2 types in js- 1) Stack(primitive type data are allocated here); 2) Heap(Non-primitive type data are allocated)

// stack (primitive)--
// let myYoutubeName = "sunny-shukla"

// let anotherName = myYoutubeName
// anotherName = "sunny-Prime"

// console.log(anotherName);
// console.log(myYoutubeName); // here, change in name in "anotherName" but no change in "myYoutubename", this is called change in copy.

// Heap(non-primitive/reference)--
let userOne = {
    email: "sunny@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "sunny121@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); // here, change happens in both the places because there is change taking place in the original file as the original file is the refernce file, thats why there is change.











