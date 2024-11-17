// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// }) 

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item // sirf ye rkhenge to undefined ayega!
    
// })
// console.log(values); // is case me foreach hmko return me kuch concrete nhi de rha hai!

// Filter--------->>>>> 
// filter v callback function he leta hai!
//for ex->

// const nums = [1, 2, 3, 4, 5, 6, , 8, 9, 10]

// const myNewnNums = nums.filter( (num) => (num > 4))
// console.log(myNewnNums);
// output-> [ 5, 6, 8, 9, 10 ] 
// -> yahan-> (num > 4)-> yahan hm de rhe hain condition! for ex -> ki num ke andar jo v value grtr thn 4 h wo sb lao!


// const myNewnNums = nums.filter( (num) => {
//    return num > 4 // bina return ke krenge to "[]" ayega! {}-> ye use hua to return likhna zaruri hai!
// })
// console.log(myNewnNums); 


// same chiz ko agar foreach se krna hua to---->>>>
// const Mynums = [1, 2, 3, 4, 5, 6, , 8, 9, 10]
// const newNums = []

// Mynums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums); 



/////////////// Filter functioning with a real life project example------------->>>>>>>>>>>>>>>>>>>>////////////////////////////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
userBooks = books.filter( (bk) => {                     //sidha userbook likh rhe hm yahan, koi let ,const nhi, aise hm overwrite krtee hain!
    return bk.publish >= 1995 && bk.genre === 'History'
})

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})
// console.log(userBooks);




