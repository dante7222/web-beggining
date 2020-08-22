const timeOut = setTimeout((s) => console.log("s"),1000)
clearTimeout(timeOut)

let interval = setInterval( () => console.log("ds"),1000); // every second will be called
clearTimeout(interval)

const  delay = (callbak,wait = 1000) => {
    setTimeout(callbak,)
}
