// @ts-ignore
enum SomeEnum{
    Simple,
    Standard= "Standard",
    Premium = 2
}

let premium = SomeEnum.Premium; // 2
let premium1 = SomeEnum[2] // premium
console.log(premium1);

enum Color {Red, Green, Blue}
