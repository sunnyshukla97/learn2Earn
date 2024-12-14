let myName = "sunny     "
// console.log(myName.length);
// console.log(myName.trim().length);

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
    
    
}
myName.trueLength();








// let myHeroes = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// } 

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
    
// }
// heroPower.hitesh(); // we've guven a method to the top hierarchy, now accessible across all the objects, i.e, strings, array, objects etc!
// myHeroes.hitesh();

// Array.prototype.heyHitesh = function(){
//     console.log(`hitesh says hello`);
    
// }
// myHeroes.heyHitesh();
// heroPower.heyHitesh(); //-> throws error here!



// Inheritace---->>>>
// old syntax previously used before->
// agenda-> to include one's property into other's; i.e, -> inheritance, to inherit!

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     // __proto__: Teacher
    
// }

// Teacher.__proto__ = User
// console.log(TASupport.__proto__);

// modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.__proto__);







