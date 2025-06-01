function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");

}
// sayMyName // reference of function
// sayMyName() // execution of function

// function addTwoNumbers(number1, number2){         // parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(10,50);
// addTwoNumbers(3,null);      // arguments
// console.log(typeof addTwoNumbers(3,4));
// console.log(typeof addTwoNumbers(3,'4'));

// const result = addTwoNumbers(3,4); 
// console.log(typeof result);

function addTwoNumbers(number1, number2){         // parameters
//    let result = number1 + number2;
//    console.log("Khushi");
//    return result;
   return number1 + number2;
}

const Result = addTwoNumbers(3,4);
// console.log("Result is : ", Result);

// function loginUserMessage(userName){
//     if(userName === undefined){         // if(!userName)
//         console.log("Please enter a User Name");
//         return;    
//     }
//     return `${userName} just Logged In`;
// }

// Set Default Parameters
function loginUserMessage(userName = "kp_18"){
    if(userName === undefined){         // if(!userName)
        console.log("Please enter a User Name");
        return;    
    }
    return `${userName} just Logged In`;
}

// const v = loginUserMessage("Khushi");
// console.log(v);

console.log(loginUserMessage());
console.log(loginUserMessage("Khushi"));