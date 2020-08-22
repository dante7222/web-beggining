// Arrays
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

// should be in same sequence, but comma allow skip further
const [sum, , mult] = calcValues(10, 8);
console.log(sum, mult); // 18 , 80
//------------------------------------------------

// Objects
const person = {
    name: 'George',
    age: 20,
    address: {
        country: 'United States',
        city: 'Washington'
    }
}

// : allow rename prop
// we can destruct even obj : - necessary
const {name: firstName, age, address: {city: newWashington}} = person
console.log(firstName, newWashington)

// use case
function logPerson({name,age}) {
    console.log(name,age)
}

logPerson(person) // George 20
