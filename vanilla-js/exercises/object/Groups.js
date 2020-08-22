class Group {
    constructor() {
        this.array = []
    }

    add(value) {
        if(!this.has(value)){
            this.array.push(value)
        }
    }

    delete(value) {
        this.array = this.array.filter(v => v !== value);
    }

    has(value) {
        return this.array.includes(value)
    }

    static initialize(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}


let group = Group.initialize([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
