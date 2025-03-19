const name = "Varun"
const repoCount = 50

//console.log(name + repoCount + " Value" );
// not recommended to do like this 

console.log(`Hello my name  is ${name} and my repo count is ${repoCount}`);

const gameName = 'hitest'//run on console

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,2);//2 value not included
console.log(newString);

const anotherString = gameName.slice(-6,2);
console.log(anotherString);


const newStringOne = "    varun   "
console.log(newStringOne);
console.log(newStringOne.trim());//works on whitespace char and new line char

const url = "https://varun.com/varun%26kasana"
console.log(url.replace('%26','-'));

console.log(url.includes('varun'))

console.log(url.split('/'))