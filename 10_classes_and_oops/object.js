function add5(num){
    return num+5;
}

// add5(5)

// add5.power = 18

console.log(add5(5));
console.log(add5.power);
console.log(add5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const pensil = new createUser("pensil",20)
const pen = new createUser("pen",100)

pensil.printMe();
pen.printMe();