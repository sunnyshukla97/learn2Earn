// Now using map->>>>>>>> Again a callback function,
// isme condition checking nhi hota hai!

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const printing = myNumbers.map( (num) => num + 10)
// const printing = myNumbers.map( (num) => {
//     return num + 10
// })
// console.log(printing); 
// output->
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ] 


// same thing by foreach!
// let come = []
// myNumbers.forEach( (value) => {
//     if (value += 10) {
//         come.push(value)
//     }
// } )
// console.log(come);



//Chaining____>>>> do teen methods directly use kr skte hain!
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => num * 10)
// .map( (num) => num + 1 )
// .filter( (num) => num >= 31 )    //jahan filter aagya wahan wo condition check krke paas krega!



// console.log(newNums);
