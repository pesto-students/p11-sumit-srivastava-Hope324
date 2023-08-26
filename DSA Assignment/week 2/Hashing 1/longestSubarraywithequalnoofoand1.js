
function findLongestSubarrayWithEqualZerosAndOnes(arr) {
    const diffMap = new Map();
    let maxLen = 0;
    let diff = 0;

    for (let i = 0; i < arr.length; i++) {
        
        diff += arr[i] === 1 ? 1 : -1;

        if (diff === 0) {
            
            maxLen = i + 1;
        } else if (diffMap.has(diff)) {
            
            maxLen = Math.max(maxLen, i - diffMap.get(diff));
        } else {
            
            diffMap.set(diff, i);
        }
    }

    return maxLen;
}


function parseInput(input) {
    return input.trim().split(" ").map(Number);
}


function runTestCases(testCases) {
    for (let i = 0; i < testCases.length; i++) {
        const arr = parseInput(testCases[i]);
        const maxLength = findLongestSubarrayWithEqualZerosAndOnes(arr);

        console.log(`Test Case ${i + 1}:`);
        console.log("Array:", arr);
        console.log("Length of Longest Subarray:", maxLength);
        console.log();
    }
}


const testCases = [
    "0 1 0 1 1 0 0",
    "1 0 1 0 1 0 1",

];
runTestCases(testCases);
