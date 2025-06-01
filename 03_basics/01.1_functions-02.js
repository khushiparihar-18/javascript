function calculateCartPrice(num1){
    return num1;
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,500));

// function calculateCartPrice2(...num1){    // rest Operator
//     return num1;
// }

function calculateCartPrice2(val1,val2,...num1){    // rest Operator
    return {val1,val2,num1};
}
// console.log(calculateCartPrice2(200,400,500,2000));

const user = {
    userName : "Khushi",
    prices : 190
}

function handleObject(anyobject){
    console.log(`UserName is : ${anyobject.userName} and Price is : ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    userName : "john wick",
    price : 4343
})

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue(
    [
        54,643,234,6644,2644,6443
    ]
));