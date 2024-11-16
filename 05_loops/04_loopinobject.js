// for loops in object, we use for-in loop->

//syntax->
// for (const key in object) {
   
// } // iske andar automatically ek if statement aata hai, kaam h if ka to rkho wrna htao!

// const myobject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myobject) {
//    console.log(key);
   
// }
//output->
// js
// cpp
// rb
// swift


// const myobject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myobject) {
//    console.log(myobject[key]);
   
// }

//output->
// javascript
// c++
// ruby
// swift by apple

// ab hmko key->value eksath chahiye to ye krenge->

// const myobject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myobject) {
//    console.log(`${key} -> ${myobject[key]}`);
   
   
// }

// output is->
// js -> javascript
// cpp -> c++
// rb -> ruby
// swift -> swift by apple



// ab kya ye "for-in" loop, array pe v kam krega?->

// const programming = ['js', 'cpp', 'python', 'ruby']
// for (const key in programming) {
//    console.log(key);
   
// }

// output->
// 0
// 1
// 2
// 3 // returns index of the array as key!


// // const programming = ['js', 'cpp', 'python', 'ruby']
// // for (const key in programming) {
// // //    console.log(programming[key]);
// // console.log(`${key} -> ${programming[key]}`);

   
   
// }

// output-> (1)
// JS
// cpp
// python
// ruby

// output-> (2)
// 0 -> js
// 1 -> cpp
// 2 -> python
// 3 -> ruby


// ab kya he "for-in" loop, map pe v kam krega!->

// const map = new Map()
// map.set('IN', 'INDIA')
// map.set('UK', 'ENGLAND')
// map.set('FR', 'FRANCE')

// for (const key in map) {
//     console.log(key);
    
// }

//output-> blank-nothing prints!