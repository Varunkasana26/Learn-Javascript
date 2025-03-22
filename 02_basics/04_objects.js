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
// console.log(obj3)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "varun"
}

// course.courseInstructor

const{courseInstructor: instructor} = course

//console.log(courseInstructor)
console.log(instructor);

// for react only
// const navbar= ({company}) =>{ //(porp.company) otherway

// }
// navbar(company = "varun")

//below are not object, treated as json
//in json key and value are string
// {
//     "name": "Varun",
//     "coursename": "js in hindi",
//     "price": "free",
// }

//some time are in array format which consist of objects
[
    {},
    {},
    {},
]
//from randomuser.me copy any result and paste it in jsonformatter.org to understand and see result
// we need these tools to study json files




