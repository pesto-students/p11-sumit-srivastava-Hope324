class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function mergeBinaryTrees(tree1, tree2) {
    if (!tree1 && !tree2) {
        return null; 
    }
    
    if (!tree1) {
        return tree2;
    }
    
    if (!tree2) {
        return tree1; 
    }
    
    const mergedNode = new TreeNode(tree1.val + tree2.val);
    mergedNode.left = mergeBinaryTrees(tree1.left, tree2.left);
    mergedNode.right = mergeBinaryTrees(tree1.right, tree2.right);
    
    return mergedNode;
}
function printPreOrder(root) {
    if (!root) {
        return;
    }
    
    console.log(root.val);
    printPreOrder(root.left);
    printPreOrder(root.right);
}

const nodes1 = prompt("Enter the elements of the First Binary Tree (space-separated values, 'null' for null nodes):").split(' ');
const nodes2 = prompt("Enter the elements of the Second Binary Tree (space-separated values, 'null' for null nodes):").split(' ');

const root1 = buildBinaryTree(nodes1);
const root2 = buildBinaryTree(nodes2);

const mergedRoot = mergeBinaryTrees(root1, root2);
console.log("Merged Binary Tree (Pre-order):");
printPreOrder(mergedRoot);
