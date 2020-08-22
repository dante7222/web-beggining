let boolean: boolean = true;
const integer: number = 5.0;
const text: string = "hello";

//Arrays
const array1: number[] = [1, 2, 3, 4, 5, 6];
const array2: Array<number> = [1, 2, 3, 4, 5, 6];

//Tuple allow different types in array
const multipleTypes: [number, string] = [1, "hello"] // should be in same sequence  and can't add more

// Any allow change types as regular
let something: any = 1;
something = [1, 2, 3];
something = "Hello";

//functions
function sayMyName(name: string):void {
 console.log(name)
}
sayMyName("1");

function returnType(name:string):number|string {
    return "1";
}

let sayMyNameArrow = (name:string) => console.log(name);
sayMyNameArrow("hello")

//Never
function throwError(message: string): never {
 throw new Error(message);
}

function infitinite():never {
 while (true) {

 }
}

// Type create own types
type Login = string;

const login : Login = "login";
type ID = string | number;
const id1 : ID = "id";
const id2 : ID = 1;
