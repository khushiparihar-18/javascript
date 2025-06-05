const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc,curVal) {
//     console.log(`Accumulator Value is ${acc} and Current Value is ${curVal}`);
//     return acc + curVal;
// },  acc =  0 )

const myTotal = myNums.reduce( (acc,curVal) => acc+curVal,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "Mobile Dev Course",
        price : 5999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    },
]

const totalPrices = shoppingCart.reduce((acc,item) => acc + item.price, 0 )
console.log(totalPrices);
