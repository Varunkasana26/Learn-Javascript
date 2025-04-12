const user = {
    username: "varun",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function  User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = User("Varun", 12, true)
// const userTwo = User("Random", 11, false)
// console.log(userOne);

const userOne = new User("Varun", 12, true)
const userTwo = new User("Random", 11, false)
console.log(userOne.constructor);//constructor give reference
console.log(userTwo)