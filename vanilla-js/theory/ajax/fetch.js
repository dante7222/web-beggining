"use strict"

const url = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body) {
    const headers = {
        "Content-Type": "application/json"
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            response.json().then(error => {
                const e = new Error("error occured")
                e.data = error
                throw e;
            })
        }); // return Response obj
}

const body = {
    name: 'George',
    age: 24
}

sendRequest("POST", url, body)
    .then(data => console.log(data))
