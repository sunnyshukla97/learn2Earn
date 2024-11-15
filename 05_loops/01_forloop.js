// for loop->






// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// here, phle index name ka ek variable declare hua hai, fir uske baad ';' -> yahan tk hota hai condition check!
// fir uske bad jaise he condition check hojata hai to loop andar ghus jata hai " const element" wale jagah pe!
// aur jab ye pura execute hoajata hai, fir bahar jump krke "index++" pe index ki value bdha deta hai!

// example to understand better!---->>>>

// for (let index = 6; index <= 10; index++) {
//     const element = index;
//     console.log(element);
//     // console.log(index); // aise v kr skte hain!
    
    
    
// } 

// console.log(element); // not accessible outside the loop.



// kya hua? -> sbse phle for ke andar, hm ek variable declare kiye, jo hai "index".
// uske baad ";"-> yahan tk hota hai condition,
// uske baad index namak variabe ko hm store krte hain ek element namak variable ke andar,
// fir us element namak variable ko print krte hain!
// print hone ke baad index++ jo hai-> ye index ko plus krte hue chalta hai, aur jabtak condition satiesfied rhta hai,
// wo output me value condition set ke hisab se dete rhta hai!


// for loop with if-else conditions---->>>>

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
//     if ( element == 5) {
//         console.log("5 is best number!"); // ye 5 ke phle print hoga fir 5 print hoga!
        
//     }
    
    
    
    
    
// } 



// Loop ke andar loop wala case---->>>>

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value: ${j} and outer value ${i}`);
        
//     }
    
// }

// ouput kuch asia ayega-->>
// outer loop value: 0
// inner loop value: 0 and outer value 0
// inner loop value: 1 and outer value 0
// inner loop value: 2 and outer value 0
// inner loop value: 3 and outer value 0
// inner loop value: 4 and outer value 0
// inner loop value: 5 and outer value 0
// inner loop value: 6 and outer value 0
// inner loop value: 7 and outer value 0
// inner loop value: 8 and outer value 0
// inner loop value: 9 and outer value 0
// inner loop value: 10 and outer value 0
// outer loop value: 1
// inner loop value: 0 and outer value 1
// inner loop value: 1 and outer value 1
// inner loop value: 2 and outer value 1
// inner loop value: 3 and outer value 1
// inner loop value: 4 and outer value 1
// inner loop value: 5 and outer value 1
// inner loop value: 6 and outer value 1
// inner loop value: 7 and outer value 1
// inner loop value: 8 and outer value 1
// inner loop value: 9 and outer value 1
// inner loop value: 10 and outer value 1
// outer loop value: 2
// inner loop value: 0 and outer value 2
// inner loop value: 1 and outer value 2
// inner loop value: 2 and outer value 2
// inner loop value: 3 and outer value 2
// inner loop value: 4 and outer value 2
// inner loop value: 5 and outer value 2
// inner loop value: 6 and outer value 2
// inner loop value: 7 and outer value 2
// inner loop value: 8 and outer value 2
// inner loop value: 9 and outer value 2
// inner loop value: 10 and outer value 2 //etc

// yanki ki, ek bar outer loop chalega to inner loop apne original values  ke sath aur ek executed outer loop values ke sath
// 10 bar print hoga!

//// ab kuch mathematical calculation krte hain loop ke andar!

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value: ${j} and outer value ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
        
//     }
    
// } 


// this time initializing i&j with 1

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j} and outer value ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
        
        
//     }
    
// }


// this time only adding i & j!

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value: ${j} and outer value ${i}`);
//         // console.log(i + '*' + j + '=' + i*j);
//         console.log(i + j);
        
        
        
//     }
    
// }


// let myArray = ["superman", "antman", "batman"]
// // console.log(myArray.length); // = 3
// console.log(myArray[2]);  // = batman


// let myArray = ["superman", "antman", "batman"]
// for (let indi = 0; indi < myArray.length; indi++) {
//     const element = myArray[indi];
//     console.log(element);
       
// } 

// agar hm condition ko <= kr denge to end me undefined ayega, kyuki index to 2 tk he diye hai array ka!

// let myArray = ["superman", "antman", "batman"]
// for (let indi = 0; indi <= myArray.length; indi++) {
//     const element = myArray[indi];
//     console.log(element);
       
// }


// let myArray = ["superman", "antman", "batman"]
// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[1];
//     // console.log(element);
//     console.log(`${element} and ${index}`);
    
    
    
// }



// ek imp chiz---> agar hm increment ++ nhi denge to loop chalta jayega first wale ke sath he! for ex->
// fir usko rokne ke lite ctrl + c krna pdega!


// let myArray = ["superman", "antman", "batman"]
// for (let indi = 0; indi < myArray.length; indi) {
//     const element = myArray[indi];
//     console.log(element);
       
// } 


// Break keyword-> isko use krne se iske baad wala kuch v print nhi hoga, code whin pe finish ho jayega!

// for (let index = 1; index <= 20; index++) {
//     if ( index == 5 ) {
//         console.log(`Detected 5!`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

//// Continue keyword-> iko use krne se, jahan pe wo specific item detect ho jata hai, wo usko highlight kr deta hai, but aage continue
// krne ke liye allow kr deta hai, code finish nhi kr deta hai break ki tarah!

// for (let index = 1; index <= 20; index++) {
//     if ( index == 5 ) {
//         console.log(`Detected 5!`);
//         continue
//     }
//     console.log(`value of i is ${index}`);
// }
