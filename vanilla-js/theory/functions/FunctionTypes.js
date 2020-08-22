//Generate
// implemenmt Symbol.iterator so can be callen in of loop
function* generator() {
     yield 1;
     yield 2;
    return 3;
}

console.log(generator().next());
console.log(generator().next());
console.log(generator().return(4));
