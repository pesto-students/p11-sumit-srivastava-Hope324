// Function to heapify the min heap
function heapify(heap, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && heap[left].val < heap[smallest].val) {
        smallest = left;
    }

    if (right < n && heap[right].val < heap[smallest].val) {
        smallest = right;
    }

    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, n, smallest);
    }
}

// Function to build a min heap
function buildMinHeap(heap) {
    const n = heap.length;
    const start = Math.floor(n / 2) - 1;
    for (let i = start; i >= 0; i--) {
        heapify(heap, n, i);
    }
}

// Function to find the kth smallest element
function findKthSmallest(matrix, k) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const heap = [];

    for (let i = 0; i < rows; i++) {
        heap.push({ val: matrix[i][0], row: i, col: 0 });
    }

    buildMinHeap(heap);

    let kthSmallest = null;
    while (k > 0) {
        kthSmallest = heap[0].val;
        const row = heap[0].row;
        const col = heap[0].col + 1;

        if (col < columns) {
            heap[0] = { val: matrix[row][col], row, col };
        } else {
            heap[0] = heap.pop();
        }

        heapify(heap, heap.length, 0);
        k--;
    }

    return kthSmallest;
}

// Take input from the user for the number of rows, number of columns, matrix elements, and k
const rows = parseInt(prompt("Enter the number of rows: "));
const columns = parseInt(prompt("Enter the number of columns: "));
const matrix = [];
for (let i = 0; i < rows; i++) {
    const row = prompt(`Enter elements of row ${i + 1} separated by commas: `).split(",").map(Number);
    matrix.push(row);
}
const k = parseInt(prompt("Enter the value of k: "));

// Find and display the kth smallest element
const kthSmallest = findKthSmallest(matrix, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
