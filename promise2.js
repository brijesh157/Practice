
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("after 1 sec");
    }, 1000)
})
console.log("Initial Time " + new Date());

promise.then((data) => {
    console.log(data + " " + new Date());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("after 3 sec");
        }, 2000)
    })
}).then((data) => {
    console.log(data + " " + new Date());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("after 6 sec");
        }, 3000);
    })
}).then((data) => {
    console.log(data + " " + new Date());
})