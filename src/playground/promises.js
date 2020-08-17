const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Zaved',
            age: 25
        });
        // reject('Something went wrong')
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).then(() => {                             // Promise chaining
    console.log('This is promise chaining')
}).catch((error) => {
    console.log('error : ',error)
});

// promise.then((data) => {
//     console.log('1', data);
// }, (error) => {          // then() can take 2 arguments. 1 for success and one for rejection. This code is same as the one above.
//     console.log('error : ',error)   
// });


console.log('after');