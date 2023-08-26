function heapSort(arr) {
    const n = arr.length;

    function heapify(parentIndex, heapSize) {
        let largestIndex = parentIndex;
        const leftChildIndex = 2 * parentIndex + 1;
        const rightChildIndex = 2 * parentIndex + 2;

        if (leftChildIndex < heapSize && arr[leftChildIndex].length > arr[largestIndex].length) {
            largestIndex = leftChildIndex;
        }

        if (rightChildIndex < heapSize && arr[rightChildIndex].length > arr[largestIndex].length) {
            largestIndex = rightChildIndex;
        }

        if (largestIndex !== parentIndex) {
            [arr[parentIndex], arr[largestIndex]] = [arr[largestIndex], arr[parentIndex]];
            heapify(largestIndex, heapSize);
        }
    }
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(i, n);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(0, i);
    }

    return arr;
}

// Read input from user as comma-separated string
const input = prompt("Enter strings as a comma-separated string: ");
const strings = input.split(",");

// Call the heapSort function and print the sorted strings
const sortedArray = heapSort(strings);
sortedArray.forEach(str => console.log(str));
