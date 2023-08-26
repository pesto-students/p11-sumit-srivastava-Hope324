class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function hasPathSum(root, targetSum) {
    if (!root) {
        return false;
    }

    targetSum -= root.val;

    if (!root.left && !root.right) {
        return targetSum === 0;
    }

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

// Function to build the binary tree based on the input
function buildBinaryTree(nodes) {
    const treeNodes = nodes.map(val => (val === 'null' ? null : new TreeNode(parseInt(val))));
    const root = treeNodes[0];

    for (let i = 0; i < treeNodes.length; i++) {
        const leftIndex = parseInt(nodes[i * 2 + 1]);
        const rightIndex = parseInt(nodes[i * 2 + 2]);

        if (leftIndex !== -1) {
            treeNodes[i].left = treeNodes[leftIndex];
        }

        if (rightIndex !== -1) {
            treeNodes[i].right = treeNodes[rightIndex];
        }
    }

    return root;
}

const nodes = prompt("Enter the nodes of the tree in a space-separated format:").split(' ');
const targetSum = parseInt(prompt("Enter the target sum:"));

const root = buildBinaryTree(nodes);
const result = hasPathSum(root, targetSum);

console.log(result);
