let url = 'https://jsonplaceholder.typicode.com/users/1';

// 2) after all callback registered call c1 - > c2

function c1(response) {
    let p4 = response.json()
    return p4;
}

function c2(profile) {
    console.log(profile)
}


// 1) first register callback functions to be called later in time
let p1 = fetch(url)

let p2 = p1.then(c1)

let p3 = p2.then(c2)
