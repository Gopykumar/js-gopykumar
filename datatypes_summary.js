//  Primitive 
//  7 types  : String, Number, boolearn, null, undefind, BigInt

const score = 100
const scoreValue =  100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 7873267498984n


// Reference (Non primitive)

//  Array, Object, Functions

const heros = ["gopi", "ashish", "jantar mantar"]
let myObj = {
    name: "patwa",
    age: 25,
}

const myFunction = function(){
    console.log("hello world"); 
    
}
console.log(typeof heros);
