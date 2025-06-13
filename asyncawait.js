
function pause() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, 5000);
    })
}

const evaluate = async () => {
    await pause();
    console.log("After 5 sec");
}

evaluate();