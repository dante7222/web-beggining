/*const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}*/

async function delay(ms) {
    let promise = await new Promise(r => setTimeout(() => r(), ms));
    await console.log("Hello World");
    await console.log("world")
}

/*delay(2000)
    .then(() => console.log("hello world"))
    .then((value => console.log("world")))*/

const url = ('https://jsonplaceholder.typicode.com/todos/1');

/*
function fetchTodos() {
    return delay(2000)
        .then(() => fetch(url))
        .then(response => response.json())
}

fetchTodos()
    .then(data =>console.log(data))
    .catch(e => console.error(e));
*/

async function fetchTodosAsync() {
    try {
        await delay(2000)
        let response = await fetch(url);
        let newVar = await response.json();
        console.log(newVar);
    } catch (e) {
        console.log(e);
    }
}

fetchTodosAsync()
