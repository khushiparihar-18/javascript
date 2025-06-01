// const tinderUser = new Object();     // Singleton Object
const tinderUser = {}    // Non Singleton Object
// console.log(tinderUser);

tinderUser.id = "8302kp";
tinderUser.name = "John Wick";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "kp@google.com",
    fullName : {
        userFullName : {
            firstName : "Khushi",
            lastName : "Parihar"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = {obj1,obj2};

// const obj3 = {...obj1, ...obj2}; 

const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// console.log(obj1);

const users = [
    {
        id : 1,
        email : "k@google.com"
    },
     {
        id : 2,
        email : "p@google.com"
    },
     {
        id : 3,
        email : "n@google.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // Very Very Important
// console.log(Object.values(tinderUser)); // Very Very Important
// console.log(Object.entries(tinderUser)); // Very Very Important

// console.log(tinderUser.hasOwnProperty("isloggin"));

// De-structure
const course = {
    courseName : "JS",
    coursePrice : "999",
    courseInstructor : "Khushi"
}

// course.courseInstructor
const {courseInstructor : instructor} = course;

// console.log(courseInstructor);
console.log(instructor);

// React Example
// const navbar = ({company}) => {

// }

// navbar(company = "Khushi")

// APIs
// JSON

// {
//     "name" : "Khushi",
//     "courseName" : "JS",
//     "Price" : "free"
// }

[
    {},
    {},
    {},
    {}
]

