// Reduce//---->>>>

// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
//  in order, passing in the return value from the calculation on the preceding element.
//   The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". 
// If supplied, an initial value may be used in its place.
//  Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0). 

// for ex-> 1)

// const array1 = [1, 2, 3, 4]; 
// // 0 + 1 + 2 + 3 + 4 -> we want to sum all the numbers here!

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10 

//kaise hua->?
// 1)phle ek initial value dena pdta hai, usually dete hain -> 0.
// 2) ek variable declare krte hain jiske andar array.reduce chalate hai, callback fn ke tarah
// 3) ab us calback fn ke andar parameter me ()-> 2 value hai,
// 4) aisa isiliye kyuki phla wala rhta hai empty, dusra wala hota hai current value
// 5) ab jo initial value diye the hmlog, phla paramter first time usise value leta hai.
// 6) fir uske agle bar, wo phla paramter initial se or value nhi leta, wo ab sum se leta hai value.


// one more easy step of doing the same---->>>>

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

//same with arrow function->
// const myNums = [1, 2, 3]
//  const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0 )
//  console.log(myTotal);
 

// one more example of a shopping cart---->>>>

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]
// const PriceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
// console.log(PriceToPay);

