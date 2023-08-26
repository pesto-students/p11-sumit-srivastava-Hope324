function getMaxCoins(grid, targetCoins) {
    const n = grid.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    let start = 0;
    let end = dp[n - 1][n - 1];
    let maxCoins = 0;
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (canCollectCoins(dp, mid, targetCoins)) {
            maxCoins = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return maxCoins;
}

function canCollectCoins(dp, targetCoins, targetRooms) {
    const n = dp.length;
    const targetRoomsSq = targetRooms * targetRooms;
    
    for (let i = targetRooms - 1; i < n; i++) {
        for (let j = targetRooms - 1; j < n; j++) {
            const sum = dp[i][j];
            if (i - targetRooms >= 0) sum -= dp[i - targetRooms][j];
            if (j - targetRooms >= 0) sum -= dp[i][j - targetRooms];
            if (i - targetRooms >= 0 && j - targetRooms >= 0) sum += dp[i - targetRooms][j - targetRooms];
            
            if (sum >= targetCoins) return true;
        }
    }
    
    return false;
}
const N = Number(prompt("Enter the size of the maze grid (N):"));
const grid = [];
for (let i = 0; i < N; i++) {
    grid.push(prompt(`Enter the elements of row ${i + 1}:`).split(" ").map(Number));
}
const targetRooms = Number(prompt("Enter the target number of rooms:"));
const result = getMaxCoins(grid, targetRooms);
console.log(result);
