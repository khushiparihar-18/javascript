// singleton
// Object.create  => Create Object by Constructor

// Object Literals

const mySym = Symbol("key1");

const JSUser = {
    name : "Khushi",
    "full Name" : "Khushi Parihar",
    [mySym] : "mykey1",       // important
    age : 19, 
    location : "shahpura",
    email : "khushi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Wednesday","Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// // console.log(JSUser.`full Name`);
// console.log(JSUser["full Name"]);
// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]);


JSUser.email = "khushi@nba.com";
// Object.freeze(JSUser); 
JSUser.email = "khushi@youtube.com";
// console.table(JSUser);
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS User");
}


// console.log(JSUser.greeting);
console.log(JSUser.greeting());

JSUser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
}
console.log(JSUser.greeting2());
