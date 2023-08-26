function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Take input from the user
const steps = parseInt(prompt("Enter the number of steps:"));

// Calculate the number of distinct ways
const ways = climbStairs(steps);

// Print the result
console.log("Number of distinct ways:", ways);
