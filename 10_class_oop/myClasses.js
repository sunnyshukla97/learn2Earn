// Syntactical sugar after ES6->

// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new user('chai', 'chai@gmail.com', '123')
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//Behind the scene---->>>>

function user(username, email, password) {
    this.username = username;
        this.email = email;
        this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user('tea', 'tea@coffee.com', '123')
// console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeUsername());