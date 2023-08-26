class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insert(data) {
        const newNode = new Node(data);
        
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    deleteWithoutHead(nodeToDelete) {
        if (nodeToDelete === null || nodeToDelete.next === null) {
            return;
        }
        
        const nextNode = nodeToDelete.next;
        nodeToDelete.data = nextNode.data;
        nodeToDelete.next = nextNode.next;
        nextNode.next = null;
    }
    
    display() {
        let current = this.head;
        const result = [];
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" "));
    }
}

// Read input from user
const elements = prompt("Enter space-separated integers to insert into the linked list:").split(" ").map(Number);
const valueToDelete = parseInt(prompt("Enter the value to delete:"));

// Create a linked list and insert elements
const linkedList = new LinkedList();
for (const element of elements) {
    linkedList.insert(element);
}

// Find the node to delete based on the value
let nodeToDelete = null;
let current = linkedList.head;
while (current !== null) {
    if (current.data === valueToDelete) {
        nodeToDelete = current;
        break;
    }
    current = current.next;
}

// Delete the node without the head node and display the modified linked list
if (nodeToDelete !== null) {
    linkedList.deleteWithoutHead(nodeToDelete);
    linkedList.display();
} else {
    console.log("Value not found in the linked list.");
}
