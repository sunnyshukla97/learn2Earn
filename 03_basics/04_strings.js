// All about Strings, it's diffferent methods & modern way of writing syntax of strings---->>>>


// const name = "sunny"
// const repoCount = 50
// console.log(name + repoCount + " value");

// Modern syntax for writing ---->>>>
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //by using ``, we can use ${}, so that we can inject any type of variable as well.

// console.log("Hello my name is " + name + " and my repo count is " + repoCount ); //this is also a way but old fashioned.

let gameName = new String('sunnygpc')
// console.log(gameName[5]); // which value is at key "5".
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase()); //- writes in capital letters.
// console.log(gameName.charAt(4)); // we can see which value is at index 4.
// console.log(gameName.indexOf('p')); // we can see the index.
// console.log(gameName.substring(0, 4)); // substring.

// console.log(gameName.slice(0, 4));
// console.log(gameName.slice(-8, -1)); // it starts from "-8" from 's'.





// NoTe- diff. btw substring and slicing is that we cannot do negative slicing in susbstring.









// console.log(gameName);
// console.log(typeof gameName); - in the type it came as an object.

//  const gameMode = "all devices"
//  console.log(gameMode);
//  console.log(typeof gameMode); - it is string type.
// console.log(gameMode.length);
// console.log(gameMode.toUpperCase());
// console.log(gameMode.__proto__);

// Trim method in string-->
// const newString = "     sunny    "
// console.log(newString);
// console.log(newString.trim()); // trim basically removes spaces.

// Replace method -->
// const url = "https://sunny.com/sunny%20shukla"

// console.log(url.replace('%20', '-'));

// Include method--> we can also see whether a variable contains something or not.
// for example->
// console.log(url.includes('sunny')); //-true
// console.log(url.includes('sundar')); //-false

// Split method--> It splits a string in diffenrent parts & also it converts string into array based on "-" or "spcaces" or whatever we want to be based on.
// const miAmore = "sunny-sh-com"
// console.log(miAmore.split(' ')); 
// console.log(miAmore.split('-'));
















 
 




