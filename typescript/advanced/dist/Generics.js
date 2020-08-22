"use strict";
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World!");
    });
});
promise.then(data => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'George' }, { age: 24 });
//-----------------------------------------------------------------------------
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Bigdin',
    age: 0
};
getObjectValue(person, 'name');
// partial allow use not all necessary fields
function createCar(model, year) {
    const car = {};
    return car;
}
//-------------------------------------
