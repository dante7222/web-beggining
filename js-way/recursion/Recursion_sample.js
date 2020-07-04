function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1); // 2 -> 4 -> 8 -> 16
    }
}
let power1 = power(2,4);
console.log(power1)