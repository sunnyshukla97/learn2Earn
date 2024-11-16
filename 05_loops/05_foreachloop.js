// for each loop->
// kuch loop arrays ke andar direct he properties me add kr diye jate hain!
//isme ek callback(fn) aata hai, jo kehta hai ki mujhe ek function dedo ki mujhe kya karna hai!
// callback function me function ka koi name nahi hota hai! 
// kyuki ye function array ke andar hota hai, to array ka jo v values hota hota hai usko wo function 
// apne andar ek parameter ke tarah har bar leke aata hai!




// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
    
// })
//output->
// js
// ruby
// java
// python
// cpp


// by arrow function---->>>>

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// })


// agar hmne function phle he declare kr rkha hai, to v kuch is tarah se hm for-each ka use kr skte hain!
// const coding = ["js", "ruby", "java", "python", "cpp"]

// function printme(item){
//     console.log(item); 
    
// }

// coding.forEach(printme)

// ye jo for each ke andar callback function hai, ye sirf values ko he nhi leke  aata hai, iske paaas or v paramaters hote hain!

// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( (item, index) => {
//     // console.log(item, index);
    
// })



// output->
// js 0
// ruby 1
// java 2
// python 3
// cpp 4
// values ke sath sath index v de diya!

// ab hmko array v chahiye pura->
// const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( (item, index, arr) => {
//     // console.log(item, index, arr);
//     // console.log(index);
//     console.log(`${index} -> ${item}`);
    
    
    

// })

// output-> 1)
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] 

// output-> 2)
// 0
// 1
// 2
// 3
// 4

// output -> 3)
// 0 -> js
// 1 -> ruby
// 2 -> java
// 3 -> python
// 4 -> cpp


// Arrays = [{}, {}, {}] -> arrays ke andar bahut sare objects hote hain!
// jab database se values aate hain, to arrays ke andar dher sare objects ke form me he aate hain!
// ab unke andar property ko access krne ke liye or unpe loop lgane ke liye kam hm kuch is prakar se krte hain---->>>>

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    },

]

// myCoding.forEach( (item) => {
//     console.log(item);
    

// })
//output->
// { languageName: 'javascript', languageFilename: 'js' }
// { languageName: 'java', languageFilename: 'java' }
// { languageName: 'python', languageFilename: 'py' }

// myCoding.forEach( (item) => {
//     console.log(item.languageName);
    
    

// })
// output->
// javascript
// java
// python


// myCoding.forEach( (item, index) => {
//     // console.log(item.languageName.includes('python'), index);
//     // console.log(item, index);
    
    
    
// }) 

// output->1)
// false 0
// false 1
// true 2

//output-2)
// { languageName: 'javascript', languageFilename: 'js' } 0
// { languageName: 'java', languageFilename: 'java' } 1
// { languageName: 'python', languageFilename: 'py' } 