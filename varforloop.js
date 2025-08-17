// Var is function scoped. In all the iterations same variable i is shared.
// In each iteration setTimeout will be scheduled with same variable i.
// At the end when callback queue starts executing after execution of synchronous code i's value will be printed.

for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}