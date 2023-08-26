
function isVowel(char) {
    return "aeiouAEIOU".includes(char);
}

function findLongestSubarrayWithEqualVowelsAndConsonants(arr) {
    let maxLen = 0;
    let vowelCount = 0;
    let consonantCount = 0;

    const diffMap = new Map();
    diffMap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (isVowel(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }

        const diff = vowelCount - consonantCount;
        if (diffMap.has(diff)) {
            maxLen = Math.max(maxLen, i - diffMap.get(diff));
        } else {
            diffMap.set(diff, i);
        }
    }

    return maxLen;
}

function parseInput(input) {
    return input.trim().split("");
}

function runTestCases(testCases) {
    for (let i = 0; i < testCases.length; i++) {
        const arr = parseInput(testCases[i]);
        const maxLength = findLongestSubarrayWithEqualVowelsAndConsonants(arr);

        console.log(`Test Case ${i + 1}:`);
        console.log("Array:", arr.join(""));
        console.log("Length of Longest Subarray:", maxLength);
        console.log();
    }
}

const testCases = [
    "abcdeiouiop",
    "aeiouAEIOU",
];
runTestCases(testCases);
