function isEven(number) {
    if (number >= 0) {

    } else {
        number = -number;
    }
    return number % 2 === 0;
}

console.log(isEven(-4))