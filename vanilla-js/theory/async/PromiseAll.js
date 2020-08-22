let urls = ['https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3']

let promises = urls.map(url => fetch(url).then(r => r.json()));

let allPromises = Promise.all(promises)
//array
let result = allPromises.then(value => console.log(value));

// The Promise returned by Promise.all() rejects when any of the input Promises is rejected.
// In ES2020, Promise.allSettled() takes an array of input Promises and returns a
// Promise, just like Promise.all() does. But Promise.allSettled() never rejects the
// returned Promise, and it does not fulfill that Promise until all of the input Promises have settled.
