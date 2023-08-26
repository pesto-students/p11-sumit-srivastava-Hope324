class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function calculateHeight(root) {
    if (!root) {
        return 0; 
    }
    
    const leftHeight = calculateHeight(root.left);
    const rightHeight = calculateHeight(root.right);
    
    return Math.max(leftHeight, rightHeight) + 1; 
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

const height = calculateHeight(root);
console.log(`The height of the Binary Tree is: ${height}`);
