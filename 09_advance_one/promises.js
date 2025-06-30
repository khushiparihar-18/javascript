// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
    // Do an Async Task
    // DataBase Calls
    // Cryptography
    // Network Calls

    setTimeout(function () {
        console.log('Async Task is Complete!');
        resolve()
    }, 1000)

})

promiseOne.then(function () {
    console.log("Promise Consumed!");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve()
    }, 3000)
}).then(function () {
    console.log("Async 2 Resolved!");

})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Khushi",
            email: "kp@hacker.com"
        })
    }, 1000)
}).then(function (user) {
    console.log(user);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username:"khushi",password:"123"})
        } else{
            reject('ERROR! Something Went Wrong')
        }
    },1000)
})

// const usernamekp = promiseFour.then((user)=>{
// console.log(usernamekp);

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((usernamekp)=>{
    console.log(usernamekp); 
})
.catch(function(err){
    console.log(err); 
})
.finally(()=>{
    console.log("The Promise is either Resolved or Rejected!");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username:"kpni3",password:"789"})
        } else{
            reject("ERRRRRRRROOOOORRRRRR!!!!!!")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
    console.log(error);
        
    }
    
}

consumePromiseFive()


// async function getAllUsers(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')

//     const userData = await response.json()
//     // const userData =  response.json()
//     console.log(userData);
//     console.log(userData);
//    } catch (e) {
//     console.log("E : ",e);
    
//    }
    
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/khushiparihar-18')
.then((res)=>{
   return res.json();
})
.then((rs)=>{
   console.log(rs);
})
.catch((e)=>{
console.log(e);

})