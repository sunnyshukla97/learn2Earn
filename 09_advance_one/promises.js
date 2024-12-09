// const promiseOne =  new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, Network calls etc
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
        
//     }, 1000) 
// })

// promiseOne.then(function(){
//     console.log('promise consumed'); 
    
    
// })

// same chiz ko hm bina kisi variable me store kre bina v kr skte hain---->>>>

// promise tast -> 2
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Async task 2 is complete!');
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Async 2 is resolved!");
    
// })


// promise task 3->
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('resolve loading');
        
//         resolve({username: "chai", email: "chai@xample.com"})

//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// }) 

// promise task -> 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'hitesh', password: '123'})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log('The promise is either rejected or resolved')
)



