let arrayOfObjects = [
    {name: "kyrik", surname: "lopux", age: 30},
    {name: "ser", surname: "gay", age: 60},
    {name: "dima", surname: "arte", age: 30}
]
let strings = arrayOfObjects.map(obj => obj.name);
//console.log(strings);

let filter = arrayOfObjects.filter(obj => obj.age > 30);
console.log(filter)

const number = arrayOfObjects
    .reduce((acc, obj) => acc += obj.age, 0)


const allBudget = arrayOfObjects
    .reduce((acc, obj) => acc += obj.age, 0)

// Object
const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    }
}

const person = {
    name: 'George',
    age: 23,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key', // key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
        console.info('Информация про человека по имени:', this.name)
    },


}


//destruction


const car = {
    name: "someName",
    printName() {
        console.log(this.name)
    }
}

//car.printName()
//car["printName"]()

loggers = {
    keys() {
        console.log("Object Keys ", Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------- Start -------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------')
            }
        })

        if (bottom) {
            console.log('------- End -------')
        }
    }
}

loggers.keysAndValues.apply(car)  //привязывает контекст, возвращает новую фонукцию
//loggers.keys.call(car)  // привязывает контекст и сразу вызывает новую фукнцию

const arrayss =  [1,2,3,4,5]
console.log(arrayss)



