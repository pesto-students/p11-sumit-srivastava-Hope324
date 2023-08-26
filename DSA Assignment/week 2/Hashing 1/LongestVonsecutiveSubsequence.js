function findLongestConsecutiveSubsequence(arr) {
  const numsSet = new Set(arr);
  let maxLength = 0;

  for (const num of arr) {
    if (!numsSet.has(num - 1)) {
      let length = 1;
      let currentNum = num + 1;

      while (numsSet.has(currentNum)) {
        length++;
        currentNum++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}

function parseInput(input) {
  return input.trim().split(" ").map(Number);
}

function runTestCases(testCases) {
  for (let i = 0; i < testCases.length; i++) {
    const arr = parseInput(testCases[i]);
    const maxLength = findLongestConsecutiveSubsequence(arr);
    console.log("Length of Longest Consecutive Subsequence:", maxLength);
  }
}

const testCases = ["100 4 200 1 3 2", "10 5 7 3 4 8 9"];

// Run test cases
runTestCases(testCases);
