// ## Problem Statement:
// Get the sum of the maximum and minimum values in an array

// ## Problem Statement:
// Write a function to return the sum of max and
// min values in an array.

function sumOfMaxAndMin(arrStr) {
  const arr = arrStr.split(" ").map(Number);
  let maxVal = arr[0];
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }

  return maxVal + minVal;
}

// Test cases
const inputStr1 = "5 2 9 1 7";
console.log("Test Case 1");
console.log("Input:", inputStr1);
console.log("Output:", sumOfMaxAndMin(inputStr1)); // Output: 10
