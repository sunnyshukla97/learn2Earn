console.log("sunny shukla");

const accountId = 12345678
let accountEmail = "sunnyshukla@gmail.com"
var accountPassword = "42321"
accountCity = "Jaipur"

// accountId = 2
// console.log(accountId);

accountEmail = "sunny@yahoo.com"
accountPassword = "12121212"
accountCity = "Mumbai"
let accountState;

// prefer not to use "var" because of issue in block scope and functional scope. 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
