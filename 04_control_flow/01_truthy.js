const userEmail = "kp@khushi.ai"
const userName = ""

if(userEmail){
    // console.log("Got User Email");
} else {
    console.log("Don't have User Email");
}

if(userName){
    console.log("Got User Name");
} else {
    // console.log("Don't have User Name");
}


/* 

FALSY VALUES

 False,
 0,
 -0,
BigInt 0n,
"" (Empty String),
null,
undefined,
NaN (Not a Number);

TRUTHY VALUES

Truthy values are all values that are not falsy.

"0",
"false",
" " ( Space String ),
[] (Empty Array),
{} (Empty Object),
function(){} (Empty function),


*/

const emptyArray = [];

if (emptyArray.length === 0) {
    // console.log("Array is Empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
    // console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);

// Ternary Operator & NCO Both are totally Different

// condition ? true : false 

const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("More Than 80") : console.log("Less than 80");

const iceCreamePrice = 70;
// iceCreamePrice <= 70 ? console.log("Less Than 70") : console.log("More than 70");

const bday = 18 ?? 20;
// const bday = null ?? 20;
bday === 18 ? console.log("It's Khushi's B'day") : console.log("It's King's B'day");

