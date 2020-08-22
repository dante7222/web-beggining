// Function proxy
const log = text =>console.log(text);

const fProxy = new Proxy(log, {

    //target = function, thisArg = context, argArray = params;
    apply(target, thisArg, argArray) {

    }
})
