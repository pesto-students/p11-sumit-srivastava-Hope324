class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(root) {
    if (!root) {
        return null; 
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    
    return root;
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
function printLevelOrder(root) {
    if (!root) {
        return;
    }
    
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = [];
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelValues.push(currentNode.val);
            
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        
        console.log(`Level ${queue.length + 1}: ${levelValues.join(' ')}`);
    }
}

const nodes = prompt("Enter the elements of the Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const root = buildBinaryTree(nodes);

const invertedRoot = invertBinaryTree(root);
console.log("Inverted Binary Tree:");
printLevelOrder(invertedRoot);
