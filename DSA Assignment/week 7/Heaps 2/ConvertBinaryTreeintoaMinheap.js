// Node class to represent binary tree nodes
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Function to perform in-order traversal and store node values in an array
function inOrderTraversal(root, arr) {
    if (root === null) {
        return;
    }
    inOrderTraversal(root.left, arr);
    arr.push(root.val);
    inOrderTraversal(root.right, arr);
}

// Function to construct a min heap from an array
function constructMinHeap(arr) {
    const heap = [];
    for (const val of arr) {
        heap.push(val);
        let currentIndex = heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (heap[currentIndex] < heap[parentIndex]) {
                [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }
    return heap;
}

// Function to build a binary tree from the sorted in-order traversal array
function buildBinaryTree(arr, start, end) {
    if (start > end) {
        return null;
    }
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = buildBinaryTree(arr, start, mid - 1);
    root.right = buildBinaryTree(arr, mid + 1, end);
    return root;
}

// Function to print in-order traversal of a binary tree
function printInorder(root) {
    if (root === null) {
        return;
    }
    printInorder(root.left);
    process.stdout.write(root.val + " ");
    printInorder(root.right);
}

// Take input from the user for the binary tree in in-order traversal
const inOrderInput = prompt("Enter the elements of the binary tree in in-order traversal (use -1 for null nodes), separated by spaces:").split(" ").map(Number);

// Perform in-order traversal and store node values in an array
const nodeValues = [];
inOrderTraversal(buildBinaryTree(inOrderInput, 0, inOrderInput.length - 1), nodeValues);

// Sort the array in ascending order
nodeValues.sort((a, b) => a - b);

// Construct a new min heap from the sorted array
const minHeap = constructMinHeap(nodeValues);

// Build the binary tree from the min heap
const minHeapTree = buildBinaryTree(minHeap, 0, minHeap.length - 1);

// Print the in-order traversal of the converted min heap
console.log("In-order traversal of the converted min heap:");
printInorder(minHeapTree);
console.log();
