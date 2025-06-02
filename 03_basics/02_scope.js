{} // scope
// Global Scope
// var c = 300
let a = 300;

// Block Scope => Local Scope
if(true){ 
    let a = 10
    const b = 20
    console.log(`Value of a Inside the Block : ${a}`);

    function addNum(){
        console.log(1+2);
        // return 1+2;
    }
}

addNum();

// console.log(a);
console.log(`Value of a (from Global Scope) : ${a}`);
// console.log(b);
// console.log(c);

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }
