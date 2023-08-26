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
    
    rearrangeZigZag() {
        let current = this.head;
        let isGreater = true;
        
        while (current.next !== null) {
            if ((isGreater && current.data > current.next.data) ||
                (!isGreater && current.data < current.next.data)) {
                // Swap data of current and next nodes
                const temp = current.data;
                current.data = current.next.data;
                current.next.data = temp;
            }
            
            current = current.next;
            isGreater = !isGreater;
        }
    }
    
    toString() {
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }
        return values.join(" ");
    }
}
const elements = prompt("Enter space-separated integers for the linked list:").split(" ").map(Number);
const list = new LinkedList();
for (const element of elements) {
    list.insert(element);
}

list.rearrangeZigZag();
console.log(list.toString());
