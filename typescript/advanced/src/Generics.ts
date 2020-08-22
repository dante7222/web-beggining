const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World!")
    })
})

promise.then(data => {
    console.log(data);
})

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'George'}, {age: 24})

//-----------------------------------------------------------------------------
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key];
}

const person = {
    name: 'Bigdin',
    age: 0
}
getObjectValue(person,'name')
// getObjectValue(person,'job) compile error

//-------------------------------------
//Partial

interface Car {
    model:string
    year:number
}

// partial allow use not all necessary fields
function createCar(model:string, year:number) : Car {
    const car : Partial<Car> = {}
    return car as Car
}

//-------------------------------------
