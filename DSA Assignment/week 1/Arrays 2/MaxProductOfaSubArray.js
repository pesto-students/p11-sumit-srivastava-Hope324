// ## Problem Name:
// Max Product of a Subarray

// ## Problem Statement:
// Take size of an array and elements as the input
// and find the maximum product of the subarray

function findMaxProductOfSubarray(size, elements) {
  const arr = elements.split("\n").map(Number);

  let maxProduct = arr[0];
  let minProduct = arr[0];
  let result = arr[0];

  for (let i = 1; i < size; i++) {
    if (arr[i] < 0) {
      const temp = maxProduct;
      maxProduct = minProduct;
      minProduct = temp;
    }

    maxProduct = Math.max(arr[i], maxProduct * arr[i]);

    minProduct = Math.min(arr[i], minProduct * arr[i]);

    result = Math.max(result, maxProduct);
  }

  return result;
}

// Test cases
const size1 = 5;
const elements1 = "2\n3\n-2\n4\n5";
console.log("Test Case 1");
console.log("Input:", size1, "and", elements1);
console.log("Output:", findMaxProductOfSubarray(size1, elements1));
