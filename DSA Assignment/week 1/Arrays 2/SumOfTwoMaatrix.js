// ## Problem Name:
// Sum of Two Matrix

// ## Problem Statement:
// Take 2 2d arrays from the user and return a 2d 
// array as their sum.

// Note  - rows and cols must be same of both the 
// input matrix else throw an error message "Arrays must have the same 
// dimensions"


function getInputArray(rows, cols) {
    const arr = [];
    for (let i = 0; i < rows; i++) {
      const subArr = [];
      for (let j = 0; j < cols; j++) {
        subArr.push(parseInt(prompt(`Enter the element at position (${i}, ${j}):`)));
      }
      arr.push(subArr);
    }
    return arr;
  }
  
  function calculateSumOfArrays(array1, array2) {
    const rows = array1.length;
    const cols = array1[0].length;
  
    if (rows !== array2.length || cols !== array2[0].length) {
      throw new Error("Arrays must have the same dimensions");
    }
  
    const sumArray = [];
    for (let i = 0; i < rows; i++) {
      const subArr = [];
      for (let j = 0; j < cols; j++) {
        subArr.push(array1[i][j] + array2[i][j]);
      }
      sumArray.push(subArr);
    }
  
    return sumArray;
  }
  
  function main() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));
  
    console.log("Enter elements for first matrix:");
    const matrix1 = getInputArray(rows, cols);
  
    console.log("Enter elements for second matrix:");
    const matrix2 = getInputArray(rows, cols);
  
    try {
      const result = calculateSumOfArrays(matrix1, matrix2);
      console.log("Resultant matrix (Sum of two matrices):", result);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  main();
  