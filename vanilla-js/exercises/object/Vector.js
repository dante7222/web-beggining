class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(otherVector) {
        return new Vector(
            this.x + otherVector.x,
            this.y + otherVector.y)
    }

    minus(otherVector) {
        return new Vector(
            this.x - otherVector.x,
            this.y - otherVector.y)
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vector(3, 4).length);