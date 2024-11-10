const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sunny"
}
// console.log(course.courseInstructor);

// Another expression of writing the same---->>>>(object de structuring)
// const {courseInstructor} = course
// console.log(courseInstructor);

// Another simple way of de structure---->>>>
// const {courseInstructor: instructor} = course
// console.log(instructor);

// const {courseInstructor: inst} = course
// console.log(inst);


// JSON & API intro---->>>>
// what is JSON->
// JSON stands for JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data
// JSON is often used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand

// JSON Syntax Rules------------------->>>>
// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

//for examples- 1)->
// {
//     "name": "sunny",
//     "coursename": "JS in Hindi",
//     "price": "free"

// }

// example- 2)->
// {
//     "employees":[
//         {"firstName":"John", "lastName":"Doe"}, 
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
//     }

// way to convert JSON into js object,
// use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// var obj = JSON.parse(text);
// console.log(obj);

// not necessary ki hme json object ke form me he mile, wo array ke anadr objects ke form me v mil sakta hai->
// [
//     {},
//     {},
//     {}
// ]



