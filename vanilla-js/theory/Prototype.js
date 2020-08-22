//это объект присуствующий у родительских элементов
export {person}
  const person = {
    name: "George",
    age: 24,
    greet() {
        console.log("Greet")
    }
}

Object.prototype.sayHello = () => console.log("Hello!");
const lena = Object.create(person); // делает персон __proto__ для lena
lena.name = "Elena"
