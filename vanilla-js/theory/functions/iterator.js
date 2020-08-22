const iterator = {
    [Symbol.asyncIterator](n = 10) {
        let i = 0;
        return {
            next() {
                if (i < n) {
                    return {
                        value: ++i, done: false
                    }
                }
                return {
                    value: undefined, done: true
                }

            }
        }
    }
}

for(let k of iterator) {
    console.log(k)
}
