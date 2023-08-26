class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function isIdentical(root1, root2) {
    if (!root1 && !root2) {
        return true; 
    }
    if (!root1 || !root2) {
        return false;
    }
    
    return (
        root1.val === root2.val &&
        isIdentical(root1.left, root2.left) &&
        isIdentical(root1.right, root2.right)
    );
}

function isSubtree(root1, root2) {
    if (!root2) {
        return true; 
    }
    if (!root1) {
        return false;
    }
    
    if (isIdentical(root1, root2)) {
        return true; 
    }
    
    return isSubtree(root1.left, root2) || isSubtree(root1.right, root2);
}

const nodes1 = prompt("Enter the elements of the First Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const root1 = buildBinaryTree(nodes1);

const nodes2 = prompt("Enter the elements of the Second Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const root2 = buildBinaryTree(nodes2);

const isSubtreeResult = isSubtree(root1, root2);
if (isSubtreeResult) {
    console.log("The second tree is a subtree of the first tree.");
} else {
    console.log("The second tree is not a subtree of the first tree.");
}
