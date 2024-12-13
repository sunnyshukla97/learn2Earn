// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: false,
    

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`username: ${this.username}`);
//         // console.log(this);
        
        
        
//     }

// }
// console.log(user);
// user.getUserDetails();
// console.log(this);

function user (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new user('hitesh', 12, true)
const userTwo = new user('sunny', 14, false)
// console.log(userOne.constructor); 
// console.log(userTwo);
// userOne.greeting();
// userTwo.greeting();

//[The new keyword creates a new object and calls the constructor function
// The constructor function packs arguments inside it and injects them into the object]



// function game (username, dob, speciality){
//     console.log(`Hello user ${username}, your dob is ${dob} and you are good at ${speciality}`);
    
// }

// game("sunny", 1997, "frontend")