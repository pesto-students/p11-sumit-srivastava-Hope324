class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function kthSmallest(root, k) {
    const stack = [];
    let currentNode = root;
    let count = 0;
    
    while (currentNode || stack.length > 0) {
        while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        
        currentNode = stack.pop();
        count++;
        
        if (count === k) {
            return currentNode.val;
        }
        
        currentNode = currentNode.right;
    }
    
    return -1; 
}

function buildBST(nodes) {
    const n = nodes.length;
    if (n === 0) {
        return null;
    }
    
    const root = new TreeNode(nodes[0]);
    for (let i = 1; i < n; i++) {
        insertNode(root, nodes[i]);
    }
    
    return root;
}

function insertNode(root, value) {
    if (!root) {
        return new TreeNode(value);
    }
    
    if (value < root.val) {
        root.left = insertNode(root.left, value);
    } else {
        root.right = insertNode(root.right, value);
    }
    
    return root;
}

const n = parseInt(prompt("Enter the number of nodes for the Binary Search Tree:"));
const nodes = prompt("Enter the elements of the Binary Search Tree (space-separated integers):").split(' ').map(Number);
const k = parseInt(prompt("Enter the value of k:"));

const root = buildBST(nodes);
const result = kthSmallest(root, k);
console.log(`The ${k}th smallest element in the Binary Search Tree is: ${result}`);
