class user {
    constructor(username) {
      this.username = username;
    }
  
    logMe() {
      console.log(`USERNAME is ${this.username}`);
    }
  }
  
  class Teacher extends user {
    constructor(username, email, password) {
      super(username);
      this.email = email;
      this.password = password;
    }
  
    addCourse() {
      console.log(`A new course was added by ${this.username}`);
    }
  }
  
  const chai = new Teacher("chai", "chai@gmail.com", "123");
  // console.log(chai);
  // chai.addCourse();
  // chai.logMe();
  
  const masalChai = new user('masalChai')
  // masalChai.logMe();
  
  
  // console.log(masalChai instanceof user);
  // console.log(chai instanceof Teacher);
  // console.log(chai instanceof user);