function isMinHeap(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        const leftChildIndex = 2 * i + 1;
        const rightChildIndex = 2 * i + 2;

        
        if (leftChildIndex < n && arr[i] > arr[leftChildIndex]) {
            return false;
        }

        
        if (rightChildIndex < n && arr[i] > arr[rightChildIndex]) {
            return false;
        }
    }

    return true; // Heap property is satisfied
}

// Take input from the user as an array of elements
const input = prompt("Enter the array of elements separated by commas: ");
const elements = input.split(",").map(Number);

// Check if the array represents a min heap
const isHeap = isMinHeap(elements);

// Display the result
console.log(`Does the array represent a min heap? ${isHeap}`);
