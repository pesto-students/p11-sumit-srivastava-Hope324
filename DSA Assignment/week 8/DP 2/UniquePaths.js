function uniquePaths(m, n) {
    const dp = [...Array(m)].map(() => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}

// Take input from the user
const rows = parseInt(prompt("Enter the number of rows:"));
const columns = parseInt(prompt("Enter the number of columns:"));

// Calculate the number of unique paths
const paths = uniquePaths(rows, columns);

// Print the result
console.log("Number of unique paths:", paths);
