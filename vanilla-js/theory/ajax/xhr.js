const url = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest;

        xhr.open(method, url);

        xhr.responseType = 'json'

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            resolve(xhr.response);
        }

        xhr.onerror = () => {
            console.error(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    })
}

/*sendRequest("GET",url)
    .then((value) => console.log(value))*/

const body = {
    name: 'George',
    age: 24
}

sendRequest("POST", url, body)
