class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function countLeafNodes(root) {
    if (!root) {
        return 0; // No nodes, so no leaf nodes
    }
    
    if (!root.left && !root.right) {
        return 1; // Leaf node
    }
    
    const leftCount = countLeafNodes(root.left);
    const rightCount = countLeafNodes(root.right);
    
    return leftCount + rightCount; 
}

function buildBinaryTree(nodes) {
    const n = nodes.length;
    if (n === 0) {
        return null;
    }
    
    const root = new TreeNode(parseInt(nodes[0]));
    const queue = [root];
    
    for (let i = 1; i < n; i += 2) {
        const currentNode = queue.shift();
        
        if (nodes[i] !== 'null') {
            currentNode.left = new TreeNode(parseInt(nodes[i]));
            queue.push(currentNode.left);
        }
        
        if (i + 1 < n && nodes[i + 1] !== 'null') {
            currentNode.right = new TreeNode(parseInt(nodes[i + 1]));
            queue.push(currentNode.right);
        }
    }
    
    return root;
}

const nodes = prompt("Enter the elements of the Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const root = buildBinaryTree(nodes);

const leafCount = countLeafNodes(root);
console.log(`The number of leaf nodes in the Binary Tree is: ${leafCount}`);
