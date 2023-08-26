class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function serializeBinaryTree(root) {
    if (!root) {
        return ''; 
    }
    
    const leftSerialized = serializeBinaryTree(root.left);
    const rightSerialized = serializeBinaryTree(root.right);
    
    return root.val + (leftSerialized ? ' ' + leftSerialized : '') + (rightSerialized ? ' ' + rightSerialized : '');
}

const nodes = prompt("Enter the elements of the Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const root = buildBinaryTree(nodes);

const serializedTree = serializeBinaryTree(root);
console.log("Serialized Binary Tree:");
console.log(serializedTree);
