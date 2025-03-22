const user = {
    username: "varun",
    pricce: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "varun"
//     console.log(this.username); //this works in object only   
// }
// chai()

const chai = () => {
    let username = "varun"
    console.log(this);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
const addTwo = (num1, num2) => ({username: "varun"})

console.log(addTwo(3,4))