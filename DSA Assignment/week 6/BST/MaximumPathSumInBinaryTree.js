class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function maxPathSum(root) {
    let maxSum = -Infinity;
    
    function findMaxPathSum(node) {
        if (!node) {
            return 0;
        }
        
        const leftSum = Math.max(findMaxPathSum(node.left), 0);
        const rightSum = Math.max(findMaxPathSum(node.right), 0);
        
        const currentPathSum = node.val + leftSum + rightSum;
        maxSum = Math.max(maxSum, currentPathSum);
        
        return node.val + Math.max(leftSum, rightSum);
    }
    
    findMaxPathSum(root);
    return maxSum;
}
function buildBinaryTree(nodes) {
    const n = nodes.length;
    if (n === 0) {
        return null;
    }
    
    const root = new TreeNode(nodes[0]);
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

const result = maxPathSum(root);
console.log(`The maximum path sum in the Binary Tree is: ${result}`);
