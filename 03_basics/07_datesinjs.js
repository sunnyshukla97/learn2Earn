// Dates---->>>>

// let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate); 
// console.log(myDate.toString()); // converts the date to a much readable form.
// console.log(myDate.toDateString()); // converts the date into- day/month/date/year form like sat nov 02 2024 etc.
// console.log(myDate.toLocaleString()); // converts date into - month/date/year,time form like 11/2/2024, 6:58:33 pm
// console.log(myDate.toLocaleDateString()); // converts into a simple form of month/date/year like 11/2/2024

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // it is at yy/mm/dd.
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // -mm/dd//yy


// Time stamp ---->>>>
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // it converts date and time into milliseconds.
// console.log(myCreatedDate.getTime());
// console.log(typeof myTimeStamp);

// --for converting values to seconds---->
// console.log(Date.now()/1000); // it gives value in decimal, to avoid this we'll use maths.floor->
// console.log(Math.floor(Date.now()/1000)); // it gives values without decimal places.
// console.log(Math.floor(myTimeStamp/1000)); // you can also write this way.

// now if we want to extract any particular thing like date only or month only etc, there are methods->>>>
let newDate = new Date()
// console.log(newDate.getMonth() + 1);// usually we add "1", so as to avoid confusion bcoz "js"-month strat from"0".

// console.log(newDate.getDate()); // gets the date of the month.
// console.log(newDate.getDay()); // gets the day.
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(typeof Date); // type of "Date" comes as function but type of new "Date()" is an object. How?

// Some customized form of date using 'localestring" method---->>>>
// console.log(newDate.toLocaleString('default', {
    // weekday: "long"  // weekday in long form as sunday.
// })) 

// console.log(newDate.toLocaleString( 'default', {
//     weekday: "narrow"
// } )); // weekday in short form as 's'.

// console.log(newDate.toLocaleString("default", {
    // era: "long" // comes in this form ---->>>>11/3/2024 Anno Domini, 12:50:34 PM
// }));


// question -> how this coversion happens? in which basisc and reference does it convert?















































