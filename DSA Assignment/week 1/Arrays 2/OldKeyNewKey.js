// ## Problem Name:
// Old Key New Key

// ## Problem Statement:
// Take array as an input from the user and
// replace occurrences of an old key with a new key 
// in an array

function replaceOccurrences(arrStr, oldKey, newKey) {
    const arr = arrStr.split(",").map(Number);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === oldKey) {
        arr[i] = newKey;
      }
    }
    return arr;
  }
  const inputStr1 = "1,2,3,2,4,2,5";
  const oldKey1 = 2;
  const newKey1 = 6;
  console.log("Output:", replaceOccurrences(inputStr1, oldKey1, newKey1)); 
  