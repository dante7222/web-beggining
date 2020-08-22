let user = {
    firstName: "Вася",
    sayHi() {
        console.log(this.firstName)
    }
};
setTimeout(user.sayHi, 2000)
console.log(user.sayHi())
