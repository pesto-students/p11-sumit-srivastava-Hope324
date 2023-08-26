// Function to find the minimum element in a min heap
function findMinimumElement(heap) {
    // The minimum element in a min heap is always at the root (index 0)
    return heap[0];
}

// Take input from the user for the min heap
const heap = prompt("Enter the elements of the min heap separated by commas:").split(",").map(Number);

// Find and display the minimum element
const minimumElement = findMinimumElement(heap);
console.log("Minimum element in the min heap:", minimumElement);
