class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }
    
    if (!root1 || !root2) {
        return false;
    }
    
    return (
        root1.val === root2.val &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right)
    );
}

// Read input for Binary Trees
class TreeNodeWithIndex {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function buildBinaryTree(nodes) {
    const n = nodes.length;
    const treeNodeMap = new Map();
    for (let i = 0; i < n; i++) {
        treeNodeMap.set(i, new TreeNodeWithIndex(nodes[i]));
    }
    
    let root = null;
    for (let i = 0; i < n; i++) {
        const [leftIndex, rightIndex] = prompt(`Enter left and right child indices of node ${i}:`).split(' ').map(Number);
        if (leftIndex !== -1) {
            treeNodeMap.get(i).left = treeNodeMap.get(leftIndex);
        }
        if (rightIndex !== -1) {
            treeNodeMap.get(i).right = treeNodeMap.get(rightIndex);
        }
        if (i === 0) {
            root = treeNodeMap.get(i);
        }
    }
    
    return root;
}

const n = parseInt(prompt("Enter the number of nodes for Tree 1:"));
const nodes1 = [];
for (let i = 0; i < n; i++) {
    const value = parseInt(prompt(`Enter the value of node ${i} for Tree 1:`));
    nodes1.push(value);
}

const root1 = buildBinaryTree(nodes1);

const m = parseInt(prompt("Enter the number of nodes for Tree 2:"));
const nodes2 = [];
for (let i = 0; i < m; i++) {
    const value = parseInt(prompt(`Enter the value of node ${i} for Tree 2:`));
    nodes2.push(value);
}

const root2 = buildBinaryTree(nodes2);

const result = areIdentical(root1, root2);
console.log(result ? "The two binary trees are identical" : "The two binary trees are not identical");
