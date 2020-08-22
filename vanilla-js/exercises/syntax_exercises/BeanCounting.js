function countBs(string) {
    let counter = 0;
    for (let str of string) {
        if (str === "B") {
            counter++;
        }
    }
    return counter;
}

console.log(countBs("BBbBb"))

function countChar(string,charToCount) {
    let counter = 0;
    for (let str of string) {
        if (str === charToCount) {
            counter++;
        }
    }
    return counter;
}

console.log(countChar("BBbBb","B"))