class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return `${Math.floor(Math.random() * 10)}`
    }
}

const hitesh = new user('hitesh')
// // console.log(hitesh);
// console.log(hitesh.createId()); 

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const sunny = new Teacher("sunny", "sunny@sunny.com")
// console.log(sunny);
// sunny.logMe();
// console.log(sunny.createId());

// static-> its a very interesting keyword, what it does is, it doesn't let any other objects to get access to a
// method with which the static keyword is associated, not even the child class. 