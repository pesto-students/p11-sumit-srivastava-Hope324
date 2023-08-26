// Function to heapify the min heap
function heapify(arr, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

// Function to build a min heap
function buildMinHeap(arr, k) {
    const start = Math.floor(k / 2) - 1;
    for (let i = start; i >= 0; i--) {
        heapify(arr, k, i);
    }
}

// Function to find the kth largest element
function findKthLargest(nums, k) {
    buildMinHeap(nums, k);

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > nums[0]) {
            nums[0] = nums[i];
            heapify(nums, k, 0);
        }
    }

    return nums[0];
}

// Take input from the user as an array of elements and k
const input = prompt("Enter the array of elements separated by commas: ");
const elements = input.split(",").map(Number);
const k = parseInt(prompt("Enter the value of k: "));

// Find and display the kth largest element
const kthLargest = findKthLargest(elements, k);
console.log(`The ${k}th largest element is: ${kthLargest}`);
