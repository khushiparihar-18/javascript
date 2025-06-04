const coding = ["js","ruby","java","python","Cpp","C"];

// coding.forEach( function (val) {
//     console.log(val);
// }  )

// coding.forEach(  (item) => {
//     console.log(item);
// }  )

// function printMe(item){
//     console.log(item);    
// }

// coding.forEach(printMe);      // Here Just Give The Refernce of the Function, Don't Execute; i.e., don't write printMe()

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    
    {
        languageName : "python",
        languageFileName : "py"
    },
    
    {
        languageName : "java",
        languageFileName : "java"
    },
    
]

myCoding.forEach( (item)=> {

    // console.log(item.languageName);
    console.log(item.languageFileName);
    
})