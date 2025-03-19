//particularly aiming for any interview

// Primitive datatype 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = "100";
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(id === anotherId);//false
const bigNumber = 12345678987n
// console.log(typeof bigNumber)
// console.log(bigNumber)

// javascript is dynamically type language not statically typed
// which mean you dont need to declare type of variable

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["captain america", "spider man", "iron man"]
let myObj = {
    name: "Varun",
    age: 18,
}

const myFunction = function(){
    console.log("Hellor world");
}

console.log(typeof outsideTemp)//object
console.log(typeof myFunction)//give result fuction but it's said to be object function


//*********************************************** 

// stack(Primitive), Heap (Non-Primitive)

let mycollagename = "Thapar"
let anothername = mycollagename
anothername = "timepass"

console.log(anothername);
console.log(mycollagename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "varun@mail.com"

console.log(userOne.email);
console.log(userTwo.email);


