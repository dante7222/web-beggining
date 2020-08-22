 // Object.prototype = Object.create(Array.prototype); // assign prototype
const person = Object.create(
    {}, // add something to prototype
    {
        name: {
            value : "George",
            enumerable : true, // allow be iterable
            writable : true, // allow change properties'
            configurable : true // allow delete
        },
        birthYear : {
            value : 1996,
            enumerable : true,
            writable : false
        }

    }
)
 person.birthYear = 1993
 console.log(person)
