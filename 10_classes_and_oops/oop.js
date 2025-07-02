const user = {
    username : "Khushi",
    loginCount : 10,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got User Details From DataBase");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}

// it will take too much Time
// const user2 = {
//     username : "kp",
//     loginCount: 4,
//     signedIn : false
// }

// console.log(user.username);
// user.getUserDetails()
// console.log(user.getUserDetails())
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()
// So what is new Keyword and what is does?


// new is a Constructor Function :
// create multiple instances from the same object

function User(username, loginCount, isLoggedIn){
    this.username = username
    // myusername = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this  // this object returned!
    // implictely defined!
    // even if I didn't return then also it will return
}

// const userOne = User("Khushi",18,true)
// const userTwo = User("kp",20,false)     
// console.log(userOne);               // Overwrite the Values of userOne


const userOne = new User("Khushi",18,true)
const userTwo = new User("kp",20,false)  
// console.log(userOne);
// console.log(userTwo);

/*
 New Keyword

1. new object Created
2. Constructor function called
3. injected into this keyword
4. we've this

*/

function hey(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`hey Welcome dear ${this.username} How are You?`)
    }
}

const heyOne = new hey("kpNi3",50,true)
// console.log(heyOne);
console.log(heyOne.constructor);
