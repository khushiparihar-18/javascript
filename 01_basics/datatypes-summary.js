/* JS IS A DYNAMIC TYPED LANGUAGE */
/*

PRIMITIVE DATA TYPES
7 TYPES:
STRING, NUMBER, BOOLEAN, UNDEFINDED, NULL, SYMBOL, BIGINT

*/
const score = 100          // Datatype => number
const scoreValue = 100.3   // Datatype => number

const isLoggedIn = false   // Datatype => boolean
const outsideTemperature = null  // Datatype => object

let userEmail;                // Datatype => undefined
let userName = undefined;     // Datatype => undefined
 
const id = Symbol('123')         // Datatype => symbol
const anotherId = Symbol('123')  // Datatype => symbol

console.log(id == anotherId);
console.log(id === anotherId);

const bigNumber = 3563444n      // Datatype => bigint
console.log(typeof bigNumber);

const color = ["black","red","blue"] 
// Datatype =>object

let myObj ={
    name: "khushi",
    age: 19,
}
// Datatype => object

const myFunction = function() {
    console.log("hello khushi");
}
// Datatype => function (function object)

console.log(typeof myFunction)



/*

REFERENCE TYPE(NON-PRIMITIVE) 
3 TYPES:
ARRAY, OBJECTS, FUNCTIONS
*/