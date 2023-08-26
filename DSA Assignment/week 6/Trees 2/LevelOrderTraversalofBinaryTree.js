class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelNodes = [];

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelNodes.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(levelNodes.join(', '));
    }

    return result;
}

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

const nodeCount = parseInt(prompt("Enter the number of nodes in the binary tree:"));
const nodes = prompt("Enter the values of each node and their left and right child indices (space-separated values, 'null' for null nodes):").split(' ');

const root = buildBinaryTree(nodes);
const traversalResult = levelOrderTraversal(root);

traversalResult.forEach((level, index) => {
    console.log(`Level ${index + 1}: ${level}`);
});
