class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function isSymmetric(root) {
    if (!root) {
        return true; // Empty tree is symmetric
    }
    return isMirror(root.left, root.right);
}

function isMirror(node1, node2) {
    if (!node1 && !node2) {
        return true; // Both nodes are null, subtree is symmetric
    }
    if (!node1 || !node2) {
        return false; // One node is null and the other is not, subtree is not symmetric
    }
    
    return (
        node1.val === node2.val &&
        isMirror(node1.left, node2.right) && // Compare left subtree of one node with right subtree of the other node
        isMirror(node1.right, node2.left) // Compare right subtree of one node with left subtree of the other node
    );
}

const nodes = prompt("Enter the elements of the Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const root = buildBinaryTree(nodes);

const isSymmetricResult = isSymmetric(root);
if (isSymmetricResult) {
    console.log("The tree is symmetric.");
} else {
    console.log("The tree is not symmetric.");
}
