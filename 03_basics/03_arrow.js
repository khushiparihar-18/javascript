const user = {
    username : "Khushi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to Website`);
        console.log(this);
        
    }

}

// user.welcomeMessage();
// user.username = "Nitin"
// user.welcomeMessage();

// console.log(this);

// function kp()
// {
//     let username = "Khushi";
//     console.log(this.username);
// }

// kp();

// const kp = function(){
//     let username = "Khushi";
//     console.log(this.username);
// }

// const kp = () =>{
//     let username = "Khushi";
//     console.log(this); 
// }

// kp();

// Explicit Return : have to write return keyword
// const addTwo = (num1,num2) => {
//     return num1 + num2 
// }

// Implicit Return : no need to write return keyword
// const addTwo = (num1,num2) =>  num1 + num2 

// When we use parentheses, no need to write return keyword
// but if we are using curly braces, then we have to write
// the return keyword [useful in REACT]
// const addTwo = (num1,num2) =>  (num1 + num2) 

// const addTwo = (num1,num2) =>  {username:"Khushi"} // can't return like this, this will return undefined
const addTwo = (num1,num2) =>  ({username:"Khushi"})

// const addTwo = (num1,num2) =>  {
// return {username:"Khushi"}
// } 
console.log(addTwo(3,4));


const myArray = [1,2,3,4,5];

