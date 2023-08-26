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
    
    sortLinkedList() {
        const count = [0, 0, 0]; // To store the counts of 0s, 1s, and 2s
        let current = this.head;
        
        while (current !== null) {
            count[current.data]++;
            current = current.next;
        }
        
        current = this.head;
        let i = 0;
        
        while (current !== null) {
            if (count[i] === 0) {
                i++;
            } else {
                current.data = i;
                count[i]--;
                current = current.next;
            }
        }
    }
    
    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const elements = prompt("Enter space-separated integers (0, 1, 2):").split(" ").map(Number);
const list = new LinkedList();
for (const element of elements) {
    list.insert(element);
}
list.sortLinkedList();
list.display();
