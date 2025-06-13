const msg = new Promise((resolve, reject) => {

    const httpStatusCode = 200;
    if (httpStatusCode === 200)
        resolve("resolved");
    else
        reject("rejected");
})

msg
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    })