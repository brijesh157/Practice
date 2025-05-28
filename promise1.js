//2 Checks -> Priority Queue + 1

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(new Date())
        resolve("after 1 sec")
    }, 1000);
})
promise
    .then((msg) => {
        console.log(msg);
        setTimeout(() => {
            console.log(new Date());
            return ("after 3 sec")
        }, 2000)
    })
    .then((msg) => {
        console.log(msg);
        setTimeout(() => {
            console.log(new Date());
            return "after 6 sec"
        }, 3000)
    })
    .finally((msg) => { console.log(msg) })

// Undefined for then -> Because in this case we are not resolving the promise.
// Undefinned for finally -> Because finally doesn't wait for previous promise to resolve.
