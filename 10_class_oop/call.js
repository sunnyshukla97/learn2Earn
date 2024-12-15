function setUsername(username){
    this.username = username
    console.log('called');
    
}

function createUser(abc, email, password){
    setUsername.call(this, abc)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", 123)
console.log(chai);
