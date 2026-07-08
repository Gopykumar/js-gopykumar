// sinhgleton
// Object.create

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Gopi",
    "full name": "Gopi kumar",
    [mySym]: "mykey1",
    age: 20,
    location: "Surat",
    email: "gopi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "gopi@chatgtp.com"
// Object.freeze(JsUser)
JsUser.email = "gopi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");   
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);   
}
    
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


