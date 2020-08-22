const person = {
    name : 'George',
    age : 24,
    job : 'not yet'
};
// Object proxy
const op =  new Proxy(person, {
    //target = obj
    get(target, p, receiver) {
        // console.log(p) return property
        console.log(target[p])  //return property value
    },
    set(target, p, value, receiver) {
        if(p in target) {
            target[p] = value;
        } else {
            throw new Error('sosi')
        }
    },
    // for "in" logic
    has(target, p) {
      return['age','name','job'].includes(p);
    },
    deleteProperty(target, p) {
        console.log(p);
    }
})
op.age = 20;
op.age


