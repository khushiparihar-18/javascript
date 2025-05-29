let myArr1 = [0,1,2,3,4,5,6,"khushi"];
// console.log(myArr1);
// console.log(typeof myArr1);

/*

JS array copy operations create shallow copies.

Shallow Copy of an object is a copy whose properties are
share the same references as those of the source object

Deep Copy of an object is a copy whose properties do not share
the same references as those of the source object from which the
copy was made.
*/

const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2);

// Array Methods

// myArr1.push(7); 
// myArr1.push(8);
// myArr1.pop();

// myArr1.unshift(9); 
// myArr1.shift();
// console.log(myArr1);

// console.log(myArr1.includes(19));
// console.log(myArr1.indexOf(20));
// console.log(myArr1.indexOf(2));

// const newArr = myArr1.join();
// console.log(newArr);
// console.log(typeof newArr);

// Slice and Splice

console.log("A ",myArr1);

const myn1 = myArr1.slice(1,3);
console.log(myn1);
console.log("B ",myArr1);

const myn2 = myArr1.splice(1,3);
console.log(myn2);
console.log("C ",myArr1);