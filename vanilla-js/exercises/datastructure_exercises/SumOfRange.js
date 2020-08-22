function range(start, end,step) {
    const array = []
    if(step> 0) {
        for (let i = start; i <= end; i+=step) {
            array.push(i)
        }
    } else {
        for (let i = start; i >= end; i+=step) {
            array.push(i)
        }
    }
    return array;
}

let range1 = range(5,2,-1);
console.log(range1)

function sum(range) {
   return  range.reduce((acc, obj)=> acc +=obj,0)
}

console.log(sum(range1))


