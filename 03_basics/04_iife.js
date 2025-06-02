// Immediately Invoked Function Expression (IIFE)

// function nba(){
//     console.log("Best League in the World");
// }
// nba();

(function nba(){
    console.log("Best League in the World");
} )();
// here to end this we must have to use semicolon *** Very very must

// ()                          ()
// function definition // execution

// Due to Global Scope Pollution, THere is Problem 
// so there are global scope variables or declaration
// to remove that pollution, we use IIFE 


// (   () => {
//     console.log("NBA is The Best League in the World");
// }) ();

// named IIFE
( function NBA(star) {
    console.log(`${star} is NBA Star`);
} ) ('Khushi');


// un-named IIFE
( (name) => {
    console.log(`${name} is The Best League in the World`);
}) ('NBA');
