const accountId = 144553
let accountEmail = "Varun@google.com"
var accountPassword = "12345"
accountCity = "Patiala"
let accountstate;
//accountId = 2 //not allowed

accountEmail = "vk@google.com"
accountPassword = "23456"
accountCity = "Jaipur"

/*
Prefer not to use var 
becasue of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])