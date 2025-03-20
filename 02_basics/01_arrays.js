// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["her", "him"]
const myArr2 = new Array(1,2,3,4,5)
//const numbers = [1,2,3,4] // cppy this to console and check prototypes

//console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf());

// const newArr = myArr.join()
// console.log(typeof newArr)

console.log(myArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr);
