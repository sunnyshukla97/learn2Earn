//// Array---->>>>>
// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array in JS can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
// In Array->
// Shallow copy: reference pass hoga like in heap
// Deep copy: copy hi pass hoga like in stack
// ----------
// slice(1,3): 3rd index will not be included
// ----------
// splice(1,3): 3rd index will be included, it will also trim portion from (1->3).




const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "nagraj",]
// console.log(myArr);
// console.log(myHeroes);
// console.log(typeof myArr);
// console.log(typeof myHeroes);

// indexing property of array---->>>>
// console.log(myArr[1]);
// console.log(myHeroes[1]);

// another way of writing array->>>>
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// Array methods->
// 1) push - adds value in array->
// myArr.push(6)
// console.log(myArr);

// 2) pop - removes last element->
// myArr.pop()
// console.log(myArr);


// 3) unshift- adds an element at the start->
// myArr.unshift(9)
// console.log(myArr);


// 4) shift - removes starting element->
// myArr.shift()
// console.log(myArr);


// 5) Includes - whether an element is present in an array or not, gives result in boolean, true or false->>>>
// console.log(myArr.includes(1));
// console.log(myArr.includes(9));

// 6) Indexof - we're asking the index of a particular element---->>>> -1 if not present!
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(9));


// 7) Join - it converts an array into a string-->
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


//8)Slice-> returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// and also, it does'nt include the last index--->>>>

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("A", myArr);

//9) Splice -> returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
// const myn1 = myArr.splice(1, 3)
// console.log(myn1);
// console.log("B", myArr);



























