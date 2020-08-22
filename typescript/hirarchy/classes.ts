class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} : Typescrio version is ${this.version}`
    }
}


class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

//same as above
class Car1 {
    readonly numberOfWheels: number = 4

    constructor(readonly theModel: string) {
    }
}
let car1 = new Car1("10");
console.log(car1.theModel);

// same modifiers: public, protected and private

// ---------------------------------------------------
// typescript allow only one constructor
class Car2 {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}
// explicit super call should be always
class Car3 extends Car2 {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        super(theModel)
    }
}
