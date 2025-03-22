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
console.log("Result: ",result);