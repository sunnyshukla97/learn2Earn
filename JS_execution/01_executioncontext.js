// JS Execution Context---->>>>
// jab v ham js ko koi code file dete hai to uska ek 'global execution context' bnta hai; jo ki "this" ke andar jaaata hai!
 
// Usually we've 2 execution context in JS->
// 1) Global execution context!
// 2) Function execution context!
// and one's also there 3) Eval execution context!-> ye apne aap me ek proprty hota hai global object ka!

// [{}]-> any Js program runs in 2 phases->>>>>>>>>>>>>>>>>>>>>>>

// 1) Memory creation phase(or creation phase) -> isme memory create hota hai, jo v variables ya jo v hmne declare kiya hai unke liye
// memory allocate hota hai!

// 2) Execution phase -> isme jo v code me hai, mathematical functions wagerah ya plus, minus jo v, wo code execute hota hai!

// How above things happen--- with example------->>>>

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = console.log(addNum(val1, val2))
let result2 = console.log(addNum(10,2));


// Steps of execution---->>>>
// 1) Global execution-> "this"

// 2) Memory phase ---->>
// val 1 = undefined
// val 2 = undefined
// addNum = definition
// result1 = undefined
// result2 = undefined

// 3) Execution phase ---->>>>
// val1 <- 10
// val2 <- 5 
// addNum ----> [new executional context]---->> (new variable enviroonment + execution thread)
   // is function ke liye alag se ek executional context bnega, jisme firse memory phase aayega aur fir execution phase ayega, fir ye finally
               // upar execution phase me jake apna final value de dega execute ho ke, jaise__>>
                      // Memory phase for addNum-> 
                        // val1 = undefined  
                        // val2 = undefined
                        // total = undefined

                    // Execution phase for addNum->
                    // num1 = 10
                    // num2 = 5
                    // total = 15

// post these operations and executions, the 1st i.e; [new executional context], gets deleted after execution.

// result1 = 15;
// now again for result2. the same process of new executional environment, memory phase and execution phase will take place!














