//  Date 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 20)
// let myCreatedDate = new Date(2026, 0, 20, 5, 3)
// let myCreatedDate = new Date("2026-07-06")
let myCreatedDate = new Date("06-07-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 2);
console.log(newDate.getDay);

// `${newDate.getDay()} and the time `

newDate .toLocaleString('default', {
    weekday: "long"
})
 






