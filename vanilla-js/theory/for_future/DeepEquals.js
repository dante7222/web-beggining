let ser = {
    name: "gay", surname: "selihov",
    countries: {
        name: "canada",
        surname: "USA",
        blabla: null,
        sosi: {
            name:"otsosi",
            kogda : "nikogda"
        }
    }
}

function deepEquals(obj) {
    if (typeof (obj) !== "object") {
        return obj;
    }

    if (obj === null) {
        return obj;
    }

    var r = (obj instanceof Array) ? [] : {};
    Object.keys(obj).forEach((key) => {
        r[key] = deepEquals(obj[key])
    })
    return r;
}

let dup1 = deepEquals(ser);
console.log(dup1)

let newSer = {};
Object.assign(newSer,ser);
console.log(newSer)


