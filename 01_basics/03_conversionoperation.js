let score = undefined

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "name" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
//console.log(typeof stringNumber);

// ******************* Operations *******************

let value = 3
let negValue = -value
//console.log(negValue)

//console.log(2+2)
//console.log(2**3)//power

let str1 = "Hello"
let str2 = " Varun"

let str3 = str1 + str2
//console.log(str3)

//console.log(1 + "2");
//console.log("1" + 2);
//console.log("1" + 2 + 2);//122
//console.log(1 + 2 + "2");//32

//console.log(3 + 4 * 5 % 3);//not good approach to write us brackets

//console.log(+true)//1
//console.log(true+)//error
//console.log(+"")//0 converted from 1

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter ++;//postfic operator       
++gameCounter; //prefix operator
console.log(gameCounter);