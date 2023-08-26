function fibonacci(n) {
    const fib = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Sum of previous two Fibonacci numbers
    }

    return fib[n]; // Return the nth Fibonacci number
}

// Take input from the user
const n = parseInt(prompt("Enter the value of n:"));

// Calculate the nth Fibonacci number using dynamic programming
const nthFibonacci = fibonacci(n);

// Display the result
console.log(`The ${n}th Fibonacci number is: ${nthFibonacci}`);
