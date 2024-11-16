// High order Array loops->
// 1) For of loop->


// jaisa ki hm python me krte the ki, for items in elements, waisa he milta julta syntax hai for off ka!
//type-1)
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
    
}

//type-2)
// const greeting = "Hello world!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }

// type-3)
// const greeting = "Hello world!"
// for (const greet of greeting) {
//     // if (greet == " ") {
//     //     break
//     // }
//     if (greet == " ") {
//         continue
//     }
//     console.log(`Each char is ${greet}`);
    
// }

// Map->
// Yes, Map is a data type in JavaScript. It is a built-in object that allows you to store key-value pairs, 
// where the keys can be of any data type (unlike objects where keys are typically strings).

// for ex-> 1)
// const myMap = new Map();

// myMap.set('name', 'John');
// myMap.set(1, 'one');
// myMap.set([1, 2, 3], 'array');

// console.log(myMap.get('name')); // Output: John
// console.log(myMap.get(1)); // Output: one
// console.log(myMap.size); // Output: 3
 

// for ex-2)
// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('UK', 'ENGLAND')
// map.set('FR', 'FRANCE')
// map.set('IN', 'Russia') // -> ye print nhi hoga, maps ke andar unique keys hota hai!
// console.log(map);
//output->
// Map(3) { 'IN' => 'Russia', 'UK' => 'ENGLAND', 'FR' => 'FRANCE' }



// for (const key of map) {
//     console.log(key);
    
// }

// output->
// [ 'IN', 'Russia' ]
// [ 'UK', 'ENGLAND' ]
// [ 'FR', 'FRANCE' ]

// for (const [key, value] of map) {
//     console.log(key,':-', value);
    
// }

// output->
// IN :- Russia
// UK :- ENGLAND
// FR :- FRANCE

// for (const [key] of map) {
//     // console.log(key);
    
// }

// output->
// IN
// UK
// FR



// trying to iterate object the same way as well, let's see the output->
// const myobj = {
//     game1: "ludo",
//     game2: "bgmi"
// }

// for (const [key, value] of myobj) {
//     // console.log(key, ':-', value);
    
    
// } // it says myobj is not iterable! 

