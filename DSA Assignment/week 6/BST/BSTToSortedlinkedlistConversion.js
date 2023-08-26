class TreeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

function convertBSTtoLinkedList(root) {
    let head = null;
    let prev = null;
    
    function inorderTraversal(node) {
        if (!node) {
            return;
        }
        
        inorderTraversal(node.left);
        
        if (!prev) {
            head = new ListNode(node.val);
        } else {
            prev.next = new ListNode(node.val);
        }
        prev = prev.next;
        
        inorderTraversal(node.right);
    }
    
    inorderTraversal(root);
    return head;
}

const n = parseInt(prompt("Enter the number of nodes:"));
let root = null;

for (let i = 0; i < n; i++) {
    const value = parseInt(prompt(`Enter the value of node ${i + 1}:`));
    root = insertNode(root, value);
}
function insertNode(root, value) {
    if (!root) {
        return new TreeNode(value);
    }
    if (value < root.val) {
        root.left = insertNode(root.left, value);
    } else {
        root.right = insertNode(root.right, value);
    }
    return root;
}

const sortedLinkedList = convertBSTtoLinkedList(root);
let currentNode = sortedLinkedList;
let linkedListStr = "";
while (currentNode !== null) {
    linkedListStr += currentNode.val;
    if (currentNode.next !== null) {
        linkedListStr += " -> ";
    }
    currentNode = currentNode.next;
}
console.log(linkedListStr);
