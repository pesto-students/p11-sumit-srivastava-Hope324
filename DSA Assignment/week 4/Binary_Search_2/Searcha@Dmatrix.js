function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let start = 0;
    let end = m * n - 1;
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return false;
}
const [m, n] = prompt("Enter the number of rows and columns:").split(" ").map(Number);
const matrix = [];
for (let i = 0; i < m; i++) {
    matrix.push(prompt(`Enter row ${i + 1} elements:`).split(" ").map(Number));
}
const target = Number(prompt("Enter the target value:"));
const result = searchMatrix(matrix, target);
console.log(result);
