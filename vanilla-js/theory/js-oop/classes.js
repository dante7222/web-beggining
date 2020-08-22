class Animal {
    static type = 'ANIMAL';

    //can create props only in constructor
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.hasTail;
    }

    voice() {
        console.log("I am Animal");
    }
}

const animal = new Animal({
    name: "Animal",
    age: 5,
    hasTail: true
});

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    voice() {
        super.voice();
    }
}

const cat = new Cat({
    name: " Cat",
    age: 7,
    hasTail: true
})

