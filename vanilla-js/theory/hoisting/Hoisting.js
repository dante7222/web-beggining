/**
 * Hoisting
 * var vs let (and const)
 */
let log = console.log;
f();
log(fe);
//log(v1); //undefined
var v1;

//log(L1); //ReferenceError - because we are inside the Temporal DeadZone
let L1; //undefined is assigned at this line
log(L1);

function f() {
    //function declaration
  //to avoid global var called x
    log("function f");
    x = "hello"; //global var called x
}

var fe = function e() {
    log("function fe");
};
