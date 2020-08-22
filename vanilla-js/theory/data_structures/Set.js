let set = new Set();
set.add(1);
set.add(1);
set.add(1);
console.log(set); // -> 1

let iterableIterator = set[Symbol.iterator]();
console.log(iterableIterator.next())
