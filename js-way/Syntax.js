//Strings
let doubleQuotes = "hello  \"\\n\". "; // escaping character, otherwise new line printed
let singleQuotesEsc = `half of 100 is ${100 / 2}`; // ${100 / 2} template literals

console.log(doubleQuotes);
console.log(singleQuotesEsc);

// console.log(`${ingredientAmount} ${unit} ${name}`);
// console.log(ingredientAmount + " " + unit + " " + name);

//--------------------------------------------------------------------------------

//instanceof analog
console.log(typeof 4.5); // number

//logical  and ternary operators are same
// null == undefined


//type coercion (javascript bullshit)
console.log(1 == true); // output: true. Should use double = for same type only
console.log(1 === -true); // output: false
/*The || operator, for example, will return the value to its left when t
hat can be converted to true and will return the value on its right otherwise.*/
console.log(null || "user");
console.log("Gay" || "user");
//--------------------------------------------------------------------------------


//variable bindings
var one = 1; // deprecated
let two = 2; // regular
const tree = 3; // final

//same Math, e.g.:
console.log(Math.pow(2, 3))


// Control flow

//if - same
let theNumber = Number("1");
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
} else {
    console.log("It's not number")
}

//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//do /while same, but while can't see inner variable
let j = 0;
do {
    console.log("do/while");
    j++;
} while (j < 10);

//switch same
switch ("rainy") {
    case "rainy":
        console.log("Remember to bring an umbrella. \n\n");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}


// break  and continue are same

//--------------------------------------------------------------------------------


//Functions
//If you bind function to variable, you must call variable like method with ()

let standart = function (s) {
    console.log(s)
}

let arrow = s => console.log(s); // same rules as in java lambdas

// javascript ignore extra arguments or ley arguments, if 0 - undefined
function square(x,y,z) {
    console.log(typeof x)
    return x
}

console.log(square(10)) // -> 100
console.log(square(4, true, "hedgehog")); // → 16
console.log(square()); // NaN

let newVar = square`10,20`; // such call of function creates array from first parameter
console.log(newVar)

function varangs(...x) {
    let result = 0
    for (let num of x) {
        result += num
    }
    console.log(typeof  x)
    return result
}

console.log(varangs(1,2,3,4,5)) // -> 15
//--------------------------------------------------------------------------------


//Closure


function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // → 1
console.log(wrap2()); // → 2
//--------------------------------------------------------------------------------


//Arrays

//let array = new Array("Selihiv","Lopux","Sosi"); redundant
let array = ["Selihiv", "Lopux", "Sosi"]; // you can assign any type, and in any index
array[10] = 1
console.log(array)  // [ 'Selihiv', 'Lopux', 'Sosi', <7 empty items>, 1 ]

//foreach analog
for (let arr of array) {
    console.log(arr)
}
//--------------------------------------------------------------------------------

//Objects

const student = {
    firstName: "Gay",
    lastName: "GayOff",
    group: 1,
    output: function () {
       console.log(this.firstName);
    }

}
student.output()


