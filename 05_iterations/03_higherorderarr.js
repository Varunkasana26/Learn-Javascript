//for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

//Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

//console.log(map)

// for(const [key, value] of map){
//     console.log(key,':-',value);
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
//}//this syntax not for objects

//syntax to iterate over object

for (const key in myObject) {
    console.log(myObject[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(key)
    console.log(programming[key])
}

//forin not for map

