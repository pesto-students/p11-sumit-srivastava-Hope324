// ## Problem Statement:
// Pairs of sum

// ## Problem Statement:
// Take an array as an input and a sum value S
// and returns an array of pairs whose sum is
// equal to sum value S.

function findPairsWithSum(arrStr, targetSum) {
  const arr = arrStr.split(",").map(Number);
  const pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

const inputStr1 = "2,4,6,8,10";
const targetSum1 = 12;
console.log("Test Case 1");
console.log("Input:", inputStr1, "and", targetSum1);
console.log("Output:", findPairsWithSum(inputStr1, targetSum1));
