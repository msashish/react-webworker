// Get a number (using onmessage method)
// Calculate fibonacci value
// Return back  (using postMessage event) value and time it took to calculate

const fib = n => {
    if (n < 2) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

onmessage = (input) => {
    const {num} = input.data;
    const start_time = new Date().getTime();
    const fibValue = fib(num);
    postMessage({
        fibValue: fibValue,
        time_taken: new Date().getTime() - start_time
    });

};