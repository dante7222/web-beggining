function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = new Object({value: array[i], rest: list})
        //console.log(list)
    }
    return list;
}

let arrayToList1 = arrayToList([1, 2, 3, 4, 8]);

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    list.unshift(element);
    return list
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) {
        console.log(list.value);
        return list.value;
    }
    else {
        console.log(list.value);
        return nth(list.rest, n - 1);
    }
}

arrayToList1.rest
console.log(nth(arrayToList1, 3));


