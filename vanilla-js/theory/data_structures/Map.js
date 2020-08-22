let ages = {
    Boris: 39,
    Liang: 22,
    Júlia: 62
};
console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Liang" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

for (let prop in ages) {
    if (ages.hasOwnProperty(prop)) {
        console.log(prop);
    }
}
// also with object  your key can be only Strings

let map = new Map();
map.set(1, "Hello1")
map.set(2, "Hello2")
map.set(3, "Hello3")

console.log(map.get(1));


