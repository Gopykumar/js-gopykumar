// const tinderUser = new Object()
const tinderUser = {}

// console.log(tinderUser);
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggeIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullnamee: {
        userfullname:  {
            firstname: "gopi",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullnamee.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "g@gmail.coom"
    },    
    {
        id: 1,
        email: "g@gmail.coom"
    },    
    {
        id: 1,
        email: "g@gmail.coom"
    },    
]


users[1].email 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "gopi"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "gopi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]