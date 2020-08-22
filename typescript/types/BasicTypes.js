var boolean = true;
var integer = 5.0;
var text = "hello";
//Arrays
var array1 = [1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6];
//Tuple allow different types in array
var multipleTypes = [1, "hello"]; // should be in same sequence  and can't add more
// Any allow change types as regular
var something = 1;
something = [1, 2, 3];
something = "Hello";
//functions
function sayMyName(name) {
    console.log(name);
}
sayMyName("1");
function returnType(name) {
    return 1;
}
var sayMyNameArrow = function (name) { return console.log(name); };
sayMyNameArrow("hello");
//Never
/*function throwError(message: string): {

}*/
