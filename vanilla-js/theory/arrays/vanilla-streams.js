const array = [1,2,3,4,5,6,7,8,9,10];

//filtering
array.filter((num) => num > 4)
// .forEach(num => console.log(num))

//map
array.map((num) => num + 3)
//.forEach(num => console.log(num))

//reduce
console.log(array.reduce((a, b) => a + b, 0));

// full foreach syntax .forEach((key, index, array)

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.some(element => element >= 4)); //anyMatch()
console.log(numbers.every(element => element >= 0)); //allMatch()