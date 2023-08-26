function floodFill(grid, row, col, newColor) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const startingColor = grid[row][col];
    
    const visited = new Array(numRows).fill(null).map(() => new Array(numCols).fill(false));
    
    function isValid(row, col) {
        return row >= 0 && row < numRows && col >= 0 && col < numCols;
    }
    
    function recursiveFloodFill(r, c) {
        if (!isValid(r, c) || visited[r][c] || grid[r][c] !== startingColor) {
            return;
        }
        
        visited[r][c] = true;
        grid[r][c] = newColor;
        
        recursiveFloodFill(r - 1, c); // Up
        recursiveFloodFill(r + 1, c); // Down
        recursiveFloodFill(r, c - 1); // Left
        recursiveFloodFill(r, c + 1); // Right
    }
    
    recursiveFloodFill(row, col);
    return grid;
}
const grid1 = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
const row1 = 1;
const col1 = 1;
const newColor1 = 2;
console.log(floodFill(grid1, row1, col1, newColor1));

