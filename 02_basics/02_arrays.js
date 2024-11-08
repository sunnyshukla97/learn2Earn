// Some more Array methods---->>>>
const marvel_Heroes = ["thor", "ironman", "spiderman"]
const dc_Heroes = ["superman", "flash", "batman"]

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes); // there is array in an array as a single element in the output terminal.
// console.log(marvel_Heroes[3]); // ["superman", "flash", "batman"], it came as the 3rd index element.

// Concat method ----> concat jo hai wo existing array me add krne par purani values he return krdeta h, new value ko store ke liye ek var chiye.

// const allHeroes = marvel_Heroes.concat(dc_Heroes)
// console.log(allHeroes);

// Spread operator -> to spread the array into a much easily readable and usable form->
// const all_New_Heroes = [...marvel_Heroes, ...dc_Heroes] //in this we can add as many values as we want.
// console.log(all_New_Heroes);

// flat method--> if we're stuck in a complicated situation of arrays, we can use "flat"! for example-
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //where there is array inside array and aonther array within that inside array.
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// console.log(another_array); // no change in the old array.


// const real_another_array = another_array.flat(1)
// // console.log(real_another_array);
// console.log(typeof real_another_array);

// is array--> to see whether given thing is an array or not. for ex->
// console.log(Array.isArray("sunny")); // gives result in true/false.

// from --> to convert any data type into an array->
// console.log(Array.from("sunny"));
// console.log(Array.from({name: "sunny"})); // it'll give an empty string becoz hme bolna pdega ki keys ka array bnau ya values ka.

// of---->>>> it converts a set of elements into an array; jahan par hmko multiple variables ko ya elements ko convert ktna ho array 
// me eksath, wahan par hm ye "of" method use karte hain.! for ex->
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));





























