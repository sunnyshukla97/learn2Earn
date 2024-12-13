// function multpleBy5(num){
//     return num * 5
// }
// multpleBy5.power = 2
// console.log(multpleBy5(5));
// console.log(multpleBy5.power);
// console.log(multpleBy5.length);
// console.log(multpleBy5.prototype); 

function createUser (username, score){
    this.username = username;
    this.score = score 
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`); 
    
}
const chai = createUser('chai', 25)
console.log(createUser.printMe);












