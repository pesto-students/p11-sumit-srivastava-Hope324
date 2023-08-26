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

// Function to merge k sorted arrays
function mergeKSortedArrays(arrays) {
    const k = arrays.length;
    const heap = [];

    for (let i = 0; i < k; i++) {
        heap.push({ val: arrays[i][0], arrayIndex: i, elementIndex: 0 });
    }

    buildMinHeap(heap);

    const mergedArray = [];
    while (heap.length > 0) {
        const { val, arrayIndex, elementIndex } = heap[0];
        mergedArray.push(val);

        if (elementIndex + 1 < arrays[arrayIndex].length) {
            heap[0] = { val: arrays[arrayIndex][elementIndex + 1], arrayIndex, elementIndex: elementIndex + 1 };
        } else {
            heap[0] = heap.pop();
        }

        heapify(heap, heap.length, 0);
    }

    return mergedArray;
}

// Take input from the user for the number of sorted arrays and the arrays themselves
const k = parseInt(prompt("Enter the number of sorted arrays: "));
const arrays = [];
for (let i = 0; i < k; i++) {
    const array = prompt(`Enter elements of array ${i + 1} separated by commas: `).split(",").map(Number);
    arrays.push(array);
}

// Merge and display the sorted array
const mergedArray = mergeKSortedArrays(arrays);
console.log("Merged sorted array:", mergedArray);
