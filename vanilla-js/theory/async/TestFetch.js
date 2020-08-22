/*fetch("http://localhost:8080/academy/getcourse/2")
    .then(r => console.log(r.json()) )*/
async function f() {
let response = await fetch("http://localhost:8080/academy/getcourse/2");
console.log(response.json())
}
f()
