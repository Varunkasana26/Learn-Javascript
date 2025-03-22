function sayMyname(){
    console.log("v");
    console.log("a");
    console.log("r");
    console.log("u");
    console.log("n");
}

//sayMyname()

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwonumbers(3,4)

//const result = addTwonumbers(3,5)

//console.log("Result:", result)//undefined

function addTwonumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwonumbers(3,5)
//console.log("Result: ",result);

function loginUserMessage(username){
    if(username === undefined){//can also write !username
        console.log("Please enter a valid username")
        return 
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("Varun"))
//console.log(loginUserMessage())


//rest operator / spread operator
function calculateCartprice(...num1){
    return num1
}

console.log(calculateCartprice(200,400,500))

const user = {
    username: "Varun",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const myNewArray = [200,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600]));