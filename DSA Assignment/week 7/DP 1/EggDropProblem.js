function eggDrop(eggs, floors) {
    const dp = new Array(eggs + 1).fill().map(() => new Array(floors + 1).fill(0));
    for (let i = 1; i <= eggs; i++) {
        dp[i][1] = 1; 
        dp[i][0] = 0; 
    }

    for (let j = 1; j <= floors; j++) {
        dp[1][j] = j; 
    }
    for (let i = 2; i <= eggs; i++) {
        for (let j = 2; j <= floors; j++) {
            dp[i][j] = Infinity; 
            for (let k = 1; k <= j; k++) {
        
            
                const maxAttempts = 1 + Math.max(dp[i - 1][k - 1], dp[i][j - k]);
                
                dp[i][j] = Math.min(dp[i][j], maxAttempts);
            }
        }
    }

    return dp[eggs][floors]; 
}


const eggs = parseInt(prompt("Enter the number of eggs:"));
const floors = parseInt(prompt("Enter the number of floors:"));


const minAttempts = eggDrop(eggs, floors);
console.log("Minimum number of attempts:", minAttempts);
