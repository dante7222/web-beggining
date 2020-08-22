// javascript class
const Animal = function (options) {
    this.name = options.name       // constructor analog
    this.colour = options.colour

    /*this.voice = function () {
        console.log("Base voice from ", this.name); // not best solution
    }*/
}

//Allow rewrite this latter and overriding
// ES6 classes use this way
Animal.prototype.voice = function () {
    console.log("Base voice from ", this.name);
}



const dog = new Animal({name: 'Gay', colour: "white"})


//extends
const Cat = function (options) {
    Animal.apply(this, arguments)
    this.hasTail = options.hasTail
}
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat
//-------------------------------------------------

//overriding
Cat.prototype.voice = function () {
    console.log("This sound goes from : ", this.name)
}

Cat.prototype.voice = function (arguments) {
    Animal.prototype.voice.apply(this,arguments)
    console.log("This sound goes from : ", this.name)
}

const cat = new Cat({name: 'Barsik', colour: "gray", hasTail: true})




