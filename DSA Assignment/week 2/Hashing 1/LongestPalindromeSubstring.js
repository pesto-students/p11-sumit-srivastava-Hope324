
function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

function longestPalindromicSubstring(s) {
    if (!s || s.length < 1) return "";

    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandFromCenter(s, i, i); // Odd length palindrome
        const len2 = expandFromCenter(s, i, i + 1); // Even length palindrome

        const length = Math.max(len1, len2);
        if (length > maxLength) {
            maxLength = length;
            start = i - Math.floor((maxLength - 1) / 2);
        }
    }

    return s.slice(start, start + maxLength);
}
function runLongestPalindromicSubstring() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the input string: ", (input) => {
        const result = longestPalindromicSubstring(input);
        console.log("Longest Palindromic Substring:", result);
        rl.close();
    });
}
 
runLongestPalindromicSubstring();
