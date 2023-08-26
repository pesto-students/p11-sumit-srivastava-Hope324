function longestPalindromicSubsequence(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

    
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }

    return dp[0][n - 1];
}


const input = prompt("Enter a string:");
const length = longestPalindromicSubsequence(input);
console.log("Length of longest palindromic subsequence:", length);
