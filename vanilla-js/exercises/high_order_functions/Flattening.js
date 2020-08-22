let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
    let newArr = []
    array.map((a) => {
        if (a instanceof Array) {
            a.forEach(element => newArr.push(element))
        } else {
            newArr.push(a)
        }
    })
    return newArr
}

console.log(flatten(arrays));

console.log(
    arrays.reduce((flat, current) =>
        flat.concat(current), [])); // same but clear