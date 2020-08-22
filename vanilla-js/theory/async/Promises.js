const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff (phone) {
    const message = 'Hey friend, I have a new ' +
        phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
async function askMom () {

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);


}

