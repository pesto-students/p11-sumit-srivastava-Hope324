function findMazePaths(rows, cols) {
    const result = [];
    
    function recursiveFindPaths(row, col, path) {
        if (row === rows - 1 && col === cols - 1) {
            result.push(path);
            return;
        }
        
        if (row >= rows || col >= cols) {
            return;
        }
        
        recursiveFindPaths(row + 1, col, path + 'D'); // Move down
        recursiveFindPaths(row, col + 1, path + 'R'); // Move right
    }
    
    recursiveFindPaths(0, 0, "");
    return result;
}

const rows1 = 3;
const cols1 = 3;
console.log(findMazePaths(rows1, cols1));

