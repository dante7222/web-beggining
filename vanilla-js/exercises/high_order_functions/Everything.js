function every(array, predicate) {
    return array.every(predicate)
}

function every2(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true