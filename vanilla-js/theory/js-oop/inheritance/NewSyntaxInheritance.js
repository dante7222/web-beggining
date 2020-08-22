class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }

    voice() {
        console.log("Base voice from ", this.name)
    }
}

const dog = new Animal({name: "Rex", color: "White"})

class Cat extends Animal {
    constructor(options) {
        super(options)
        this.hasTail = options.hasTail
    }
    voice() {
        console.log("Cat voice",this.name);
    }
}
const cat = new Cat({name: 'Barsik', colour: "gray", hasTail: true})
console.log(cat.voice());