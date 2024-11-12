// "This"; keyword-------->>>>>
// "this", refers to the current context!
//'this' keyword inside a function refers to the object that the function is a property of or the object that the function is called on. However, the behavior of the this keyword inside an arrow function is different from regular functions.
//In an arrow function, the this keyword is lexically scoped, meaning it takes on the value of the this keyword in the surrounding code. The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions. 
//It keeps the same value as the this keyword in the surrounding code.

// For example---->>>>

const user = {
    username: "sunny",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this); // gives empty {}, in node environment, but gives window as a global object in browser!

