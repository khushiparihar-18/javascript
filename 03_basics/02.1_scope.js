function one(){
    const username = "Khushi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if (true) {
    const username = "Khushi"
    if(username === "Khushi"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);


// interesting  
// hoisting


console.log(addone(5));
function addone(num){
    return num+1;
}


addTwo(5);
const addTwo = function(num){
    return num+2;
}
