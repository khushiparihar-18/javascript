const name = "khushi"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('khushi-kp')

// console.log(gameName[0])
// console.log(gameName[1])
// console.log(gameName[3])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,6)
// console.log(newString);

const anotherString = gameName.slice(-8,3);
// console.log(anotherString)

// console.log(name.substring(0,3));

const string1 = gameName.split('-');
// console.log(string1);

const string2 = gameName.split('k');
// console.log(string2);

const string3 = gameName.at(5);
// console.log(string3);

const string4 = gameName.charAt(5);
// console.log(string4);

let v = (string3 === string4)
// console.log(v);

const string5 =  gameName.charCodeAt(3);
// console.log(string5);

const string6 = gameName.includes('kp');
// console.log(string6);

const string7 = gameName.startsWith('khushi');
console.log(string7);

const string8 = gameName.endsWith('kp');
console.log(string8);

const string9 = gameName.replace('khushi', 'khushi-kp');    
console.log(string9);

console.log(gameName);

const string10 = gameName.small();
console.log(string10);

