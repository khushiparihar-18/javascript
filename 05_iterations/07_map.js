const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map( (num)=> num+10 )
// const newNumbers = myNumbers.map( (num)=> {return num+10} )
// console.log(newNumbers);

// const n = [];
// const newNums = myNumbers.forEach( (num)=> { n.push( num+10)})
// console.log(n);

const newNums = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num)=> num >= 40 )
console.log(newNums);

// const testNums = myNumbers
//                         .map( (test)=> test > 5 )
// console.log(testNums);



