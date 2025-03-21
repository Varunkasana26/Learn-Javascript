//const tinderUser = new Object()//singleton
const tinderUser = {}//non singleton 

tinderUser.id = "123abc"
tinderUser.name = "Samar"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Varun",
            secondname: "kasana",
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}//to know more past thsi in console
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}//same array porblem in combing 
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}//better and simple
console.log(obj3)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedin'));