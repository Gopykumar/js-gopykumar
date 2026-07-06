const name = "gopi"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gopi-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "    gopi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://gopi.com/gopi%20patwa"

console.log(url.replace('%20', '-'))
 
console.log(url.includes('gopi'))

console.log(gameName.split('-')); 
