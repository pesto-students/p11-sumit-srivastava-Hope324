function minCostToPaintHouses(costs) {
    const n = costs.length;

    if (n === 0) {
        return 0;
    }

    const dp = [...Array(n)].map(() => Array(3).fill(0));
    dp[0] = costs[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }

    return Math.min(...dp[n - 1]);
}

// Take input from the user
const input = prompt("Enter the cost matrix (each row separated by commas, values in each row separated by spaces):");
const rows = input.split(',').map(row => row.split(' ').map(Number));

// Calculate the minimum cost to paint all the houses
const minCost = minCostToPaintHouses(rows);

// Print the result
console.log("Minimum cost to paint all houses:", minCost);
