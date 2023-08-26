function solveNQueens(n) {
    const result = [];
    const chessboard = new Array(n).fill(null).map(() => new Array(n).fill(0));
    const occupiedColumns = new Array(n).fill(false);
    const occupiedDiagonals = new Array(2 * n - 1).fill(false);
    const occupiedAntiDiagonals = new Array(2 * n - 1).fill(false);

    function isSafe(row, col) {
        return !occupiedColumns[col] && !occupiedDiagonals[row + col] && !occupiedAntiDiagonals[row - col + n - 1];
    }

    function placeQueen(row, col) {
        chessboard[row][col] = 1;
        occupiedColumns[col] = true;
        occupiedDiagonals[row + col] = true;
        occupiedAntiDiagonals[row - col + n - 1] = true;
    }

    function removeQueen(row, col) {
        chessboard[row][col] = 0;
        occupiedColumns[col] = false;
        occupiedDiagonals[row + col] = false;
        occupiedAntiDiagonals[row - col + n - 1] = false;
    }

    function recursiveSolve(row) {
        if (row === n) {
            result.push(chessboard.map(row => [...row]));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                placeQueen(row, col);
                recursiveSolve(row + 1);
                removeQueen(row, col);
            }
        }
    }

    recursiveSolve(0);
    return result;
}
const n1 = 4;
console.log(solveNQueens(n1));

