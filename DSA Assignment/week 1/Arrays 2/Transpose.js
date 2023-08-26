// ## Problem Name:
// Transpose a matrix
// ## Problem Statement:
// Take a 2d array as input and return the tranpose
// of that 2d Matrix

function takeMatrixInput(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const element = parseInt(prompt(`Enter the element at position (${i}, ${j}):`));
        row.push(element);
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposedMatrix = [];
  
    for (let j = 0; j < cols; j++) {
      const row = [];
      for (let i = 0; i < rows; i++) {
        row.push(matrix[i][j]);
      }
      transposedMatrix.push(row);
    }
  
    return transposedMatrix;
  }
  
  function printMatrix(matrix) {
    for (const row of matrix) {
      console.log(row.join("\t"));
    }
  }
  
  function main() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));
  
    console.log("Enter elements for the matrix:");
    const matrix = takeMatrixInput(rows, cols);
  
    console.log("Original Matrix:");
    printMatrix(matrix);
  
    const transposedMatrix = transposeMatrix(matrix);
  
    console.log("Transposed Matrix:");
    printMatrix(transposedMatrix);
  }
  
  main();
  