//class decorator
function Log(constructor: any) {
    return class extends constructor {
        name = "hello"
        logName() {
            
        }
    }
}

// property decorator
// target is class
function Log2(target: any, proName: any) {
    console.log(target)
    console.log(proName)
}

//for methods
function Log3(target: any, proName: any, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(proName)
    console.log(descriptor)
}

@Log
class Componentos {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    logName(): void {
        console.log("Component name", this.name)
    }
}
let componentos = new Componentos("1");
console.log(componentos)
