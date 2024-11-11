// Type 1) function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
    
// }

// addTwoNumbers(1, 2)

// Type 2) function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
    
// }

// const result = addTwoNumbers(1, 2) // js pe variable ke andar v store kr skte hain, lekin usi variable ko print nhi kr skte, jbtk return na use kiya ho upar function definition krte samay.
// console.log("Result : ", result); //"Result" ->undefined ayega!


// Type 3) function addTwoNumbers(n1, n2){
//     let result = n1 + n2
//     return result
    
// }

//  const result = addTwoNumbers(1, 2)
// console.log(result); // ab console log se ho rha hai print!

// Type 4) function addTwoNumbers(n1, n2){
//     return n1 + n2
    
// }

// const result = addTwoNumbers(1, 2)
// console.log(result); //another way of writing the code directly. 

//  function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
//     return n1 + n2
    
// }

// const vaar = addTwoNumbers(1, 2)
// console.log(vaar);

// Type 5) function loginUserMessage(username){
//     return `${username} just logged in` 
// }

// console.log(loginUserMessage("sunny")) //jab hmne return krne ko kaha hai to print krne ke liye bolona padega,
// console log ko andar function call ko wrap krke bhi print krwa sakte hai.

// console.log(loginUserMessage()) // empty chorne pe output me undefined ayega!

// Function with conditionsal statements like "if", "else" etc!

// function loginUser(username){
//     if(username === undefined){
//         console.log("Please enter a username!");
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUser());

// upar hm if wale me ----> if(){}, syntax use krte hai, ()->isme hm check krwate hain, 
// aur {}-> isme hm code execute krwate hain!.


// function loginUser(username){ // One more way of expressing it.
//     if(!username){
//         console.log("Please enter a username!");
//         return //iske bad ab kuch kamhe nhi krege return last me likhne ke baad!
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUser());

// If we want to avoid "undefined" situation, we give the username a default name, if nothing passed, that'll print.
// function loginUser(username = "sam"){ // One more way of expressing it.
//     if(!username){
//         console.log("Please enter a username!");
//         return //iske bad ab kuch kamhe nhi krege return last me likhne ke baad!
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUser());
// console.log(loginUser("sunny")); // ye likhte he ye print hoga, upar wale ko overwrite krke.





