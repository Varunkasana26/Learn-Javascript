// singleton
//a design pattern that ensures a class has only one 
//instance and provides a global point of access to 
//it

// object literals

const mySym = Symbol("Key1")
const mySym1 = Symbol("Key2")

const JsUser = {
    name: "Varun",
    mySym: "myKey1",// this wont be used as symbol in object
    [mySym1]: "myKey2",//[]to use as symbol in object
    age: 18,
    location: "Patiala",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.name)//one of the way to acess object
// console.log(JsUser["name"])//most accurate way to print
// console.log(JsUser["mySym"])
// console.log(typeof JsUser["mySym"])
// console.log(JsUser[mySym1])
// console.log(typeof JsUser[mySym1])

JsUser.email = "varun@unknownmail.com"
//Object.freeze(JsUser)
JsUser.email = "varun@knownmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//console.log(JsUser.greeting);// function not excuded only reference is given
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());

