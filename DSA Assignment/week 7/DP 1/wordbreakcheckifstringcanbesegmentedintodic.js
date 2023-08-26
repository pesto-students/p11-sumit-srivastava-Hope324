function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; 
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n]; 
}


const inputString = prompt("Enter the string:");
const dictionaryInput = prompt("Enter the dictionary words (space-separated):");
const dictionaryWords = dictionaryInput.split(" ");


const canSegment = wordBreak(inputString, dictionaryWords);


console.log(`Can the string be segmented into dictionary words? ${canSegment}`);
