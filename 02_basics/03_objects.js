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
// Juser.greeting = function(){
//     console.log("Hello JS User");
    
// }

// Juser.greetingtwo = function(){
//     console.log(`Hello JS User, ${this.name}`);
    
// }

// console.log(Juser.greeting());
// console.log(Juser.greetingtwo());
// console.log(Juser);
// Juser.greeting()
// Juser.greetingtwo()


const Person = {
    name: "john",
    age: 30,
    location: "sitamarhi",
    isLoggedIn: true,
    email: "kangaroo@firehai.com",
    available: "yes",
    greet: function() {
        console.log(`Hello from ${this.name}`);
        
    }
  

}
// console.log(Person);
// Person.sayHello = function(){
//     console.log(`Hello, my name is ${this.name}`);
    
// }

// Person.sayHello()

// Person.greet = function(){
//     console.log(`${'greetings'}, my name is ${this.name}`);
    
// }
// Person.greet()

// console.log(Person);

// Person.greet()

// Create object using constructor---->>>> example with syntax-->>

// function People(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const People1 = new People("john", 30)
// // console.log(People1);
// console.log(People1.name);




const tinderUser = new Object() //singleton way of declaring an object.
// const tinderUser = {} //literal way of object declaration.
tinderUser.id = "123abc"
tinderUser.name = "ratan"
tinderUser.isLoggedIn = false
// tinderUser.name = "ramu"
// tinderUser.age = 34
// tinderUser.occupation = "business"
// tinderUser.hobbies = ['cricket', 'hockey', 'cinema']
// console.log(tinderUser);



const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "sunny",
            lastname: "shukla"
        }
    }
}
// Below is a way of accessing stuffs of objects under ojects kind of things.
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// adding diff sets objects in as single object---->>>>
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);  // same problem of objects ke andar ek aur objects aa rha hai output me, so we use object.assign()

// The Object.assign() is static method copies all enumerable own properties from one or more source objects to a target object.
// It returns the modified target object.
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{}->we're giving it a target to take the sources to that target.
// console.log(obj3);

// const obj3 = {...obj1, ...obj2, ...obj4} // the spread operator- mostly 90% of time, we use this.
// console.log(obj3);



// Jab Database se value aata hai, to arrays of objects ke form me aata hai,
// to unko loop thru krna ho ya kisi ka value print krna ho, to wo hm kuch is prakar karenge---->>>>

// const users = [
//     {
//         id: 1,
//         email: "s@google.com"
//     },
//     {
//         id: 2,
//         email: "s2@google.com"
//     }
// ]

// console.log(users[1].email)





// key aur value ko output pe print krwana---->>>>

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //returns output of keys as an array!
// console.log(Object.values(tinderUser)); // returns output of values as an array!
// console.log(Object.entries(tinderUser)); // retruns key,values of array inside an array,
// like [['id', '123abc'], ['name', 'ratan']]


// "hasownproperty" method -> is method se, we ask ki aisa koi value hai kya!
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns output as boolean values, true/false.


































































