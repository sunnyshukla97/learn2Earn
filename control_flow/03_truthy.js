// const userEmail = "h@hitesh.ai"

// if ( userEmail ){  
//     console.log("got user email");
    
// } else {
//     console.log("Don't have user email");
    
// }

// imp note->>>> isme hm kuch condition check nhi kr rhe hain, fir v ye man liya ja rha hai ki condition true he hoga,
// aisa isiliye kyuki isme string ke andar value hone pe true maan liya jata hai!

// yhi agar empty string rkhenge to false maan liya jayega!

// const userEmail = ""

// if ( userEmail ){  
//     console.log("got user email");
    
// } else {
//     console.log("Don't have user email"); // ab ye print hoga!
    
// }

// yhi agar empty array ho []-> to usko true man liya jyega!

// const userEmail = []

// if ( userEmail ){  
//     console.log("got user email"); // ab ye print hoga!
    
// } else {
//     console.log("Don't have user email"); 
    
// }



// IMP note-> ab aisa ho kyun rha hai????

// Falsy values ->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN -> in sabhi ko flasy value mana jata hai;
// inke alawa sabhi ko tuthy value he mana jata hai!

// Truthy valuse ->
// "0", "false", " ", [], {}, function(){}

// array empty hua to kaise check krenge->
// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty!!");
    
// }

// object empty hua to kaise check krenge->


// first reminder note-> Object.keys(objectname)-> ye krne pe jitne keys hai us object ke wo return aate hain array ke form me!
// bas yhin se hai khel, ab usme array ki .length method lgake uska length nikal lenge or dekh lenge empty hai ya nahi array!

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Obj is empty!!");
    
// }

// Nullish Coalescing Operator (??): null; undefined -> isko null or undefined ke liye bnaya gya hai!
// The ?? operator returns the first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.


// let val1;
// // // val1 = 5 ?? 10 // output-5
// // // val1 = null ?? 10 // output-10
// // val1 = undefined ?? 15 // output-15
// // val1 = null ?? undefined // output- undefined
// val1 = null ?? 10 ?? 20 // output-10




// console.log(val1);


// Ternary Operator---->>>>
//condition ? true : false -> syntax!

// for ex->
// const iceTeaprice = 500
// iceTeaprice >= 499 ? console.log("expensive") : console.log("affordable!yay!!");







