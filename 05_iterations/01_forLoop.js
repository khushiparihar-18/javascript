for (let i = 0; i < 10; i++) {
    let element = i;
    if(element === 5){
        // console.log("5 is Magical Number");
        
    }
    // console.log(++element);
       
}
// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of Number : ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner Loop Values are ${i} and ${j}`);
//         // console.log(i + '*' + j + '=' + i*j );
        
//         }
// }

// let myArray = ["family","basketball","hacking","racer","sniper"];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

// Break and Continue

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of index is ${index}`);  
}

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        break;
    }
    console.log(`Value of index is ${index}`);  
}

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of index is ${index}`);  
}