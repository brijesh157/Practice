function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback(null, "data from step 1");
    }, 1000);
}

function step2(dataFromStep1, callback) {
    setTimeout(() => {
        console.log("Step 2 completed with:", dataFromStep1);
        callback(null, "data from step 2");
    }, 1000);
}

function step3(dataFromStep2, callback) {
    setTimeout(() => {
        console.log("Step 3 completed with:", dataFromStep2);
        callback(null, "data from step 3");
    }, 1000);
}

// Nested callbacks → callback hell
step1(function (err, result1) {
    if (err) return console.error(err);
    step2(result1, function (err, result2) {
        if (err) return console.error(err);
        step3(result2, function (err, result3) {
            if (err) return console.error(err);
            console.log("All steps completed. Final result:", result3);
        });
    });
});