class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) {
        return true;
    }
    
    if (root.val <= min || root.val >= max) {
        return false;
    }
    
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}
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

const n = parseInt(prompt("Enter the number of nodes:"));
const nodes = [];
for (let i = 0; i < n; i++) {
    const value = parseInt(prompt(`Enter the value of node ${i}:`));
    nodes.push(value);
}

const root = buildBinaryTree(nodes);

const result = isBST(root);
console.log(result);
