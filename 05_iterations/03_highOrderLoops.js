// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5,"Khushi"]

for (const num of arr) {
    console.log(num);
    
}

// const greetings = "Hello Khushi"
// for (const greet of greetings) {
//     if(greet === " "){
//         continue;
//     }
//     console.log(`Each Char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

// for (const element of map) {
//     console.log(element[0] , ':-' , element[1]);
    
// }

// for (const [key,value] of map) {
//     console.log(key , ':-' , value);
    
// }

const myObject = {
    Game1 : 'NFS',
    Game2 : 'BGMI'
}

// forof loop
// Will Throw an error that Objects are not iterable 
// for (const element of myObject) {
//     console.log(element[0]);
    
// } 



