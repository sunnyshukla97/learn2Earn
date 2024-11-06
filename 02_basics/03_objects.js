// ObJects-->>
// In JavaScript, objects are collections of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type, including other objects, functions, or primitive values like numbers and strings.
// Think of objects as containers that store related data and functionality together. They are a fundamental building block of the language and are used to represent real-world entities, data structures, and more.

// Objects are dynamic, meaning you can add or remove properties at any time.
// Objects are passed by reference, meaning when you assign an object to a variable, you're actually assigning a reference to the object's memory location.
// Almost everything in JavaScript is an object, including arrays, functions, and even primitive values (like strings and numbers) when wrapped in their corresponding object wrappers.


// There are 2 ways of creating objects-
// 1) Literals 2) constructor

// 1) Literals-> eg.->
// const Juser = {}

// 2) constructor-> eg.->
// Object.create
// when object is declared thru constructor, "singleton" is created.


// object literals;->

// how to create a "symbol"-?
const mysym = Symbol("key1")
// console.log(mysym);
// console.log(typeof mysym);


const Juser = {
    name: "sunny",
    "full name": "sunny shukla",
    age: 27,
    [mysym]: "mykey1",
    location: "Pakur",
    email: "sunny@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]


}
// console.log(Juser.email);
// console.log(Juser["email"]); // ways of accessing objects.

// console.log(Juser["full name"]); // matlab agar key ko kisine upar wale ke jaise diya to iske siwa or koi tarika nahi hai 
// usko access krne ka.

//ques-> symbol ko jab typeof kr rhe h to wo symbol declare hone ke baad bhi typeof me string he bta rha hai. kyu?


// How to change values in an object->
//for eg->
Juser.email = "sunny@chatgpt.com"
// console.log(Juser.email);

// How to lock/freeze an object for no further changes->
// Object.freeze(Juser) //beyond this no further changes will take place untill & unless commeneted out!
// Juser.email = "sunny@microsoft.com"
// console.log(Juser);

// How to add function in a object---->>>>
Juser.greeting = function(){
    console.log("Hello JS User");
    
}

Juser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

// console.log(Juser.greeting());
// console.log(Juser.greetingtwo());
// console.log(Juser);
// Juser.greeting()
// Juser.greetingtwo()







































