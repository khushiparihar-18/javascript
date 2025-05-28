/* 
Stack Memory (Primitive)
Heap Memory  (Non-Primitive)
*/

let myYoutubeName = "khushiparihar"

let anotherName = myYoutubeName
anotherName = "kp_18"

console.log(myYoutubeName);   // khushiparihar
console.log(anotherName);     // kp_18

let userOne = {
    email : "userOne@google.com",
    upi : "userOne@upi"
}

let userTwo = userOne

userTwo.email = "khushi@google.com"

console.log(userOne.email)  // khushi@google.com
console.log(userTwo.email)  // khushi@google.com

