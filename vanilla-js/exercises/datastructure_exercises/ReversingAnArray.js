const sampleArray = [1, 2, 3, 4, 5, 6,];

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

console.log(reverseArray(sampleArray))

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArrayInPlace(sampleArray))

console.log(Math.floor(4/3))
console.log(4/3)
reverseArrayInPlace()