// Let is block-scoped. So, each iteration will have different i.
// In each iteration setTimeout will be scheduled with different i.
// At the end when callback queue starts executing after execution of synchronous code i's value will be printed.

for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// How to achieve this behaviour with var ?