let space = " ";
let symbol = "#";
let result = "";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((j + i) % 2 === 0) {
            result += space;
        } else {
            result += symbol;
        }
    }
    result += "\n";
}
console.log(result)