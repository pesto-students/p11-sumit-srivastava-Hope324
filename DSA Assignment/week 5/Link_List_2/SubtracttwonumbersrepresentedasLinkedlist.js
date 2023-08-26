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
    
    subtract(secondList) {
        let current1 = this.head;
        let current2 = secondList.head;
        let borrow = 0;
        let result = new LinkedList();
        
        while (current1 !== null || current2 !== null) {
            const diff = (current1 ? current1.data : 0) - (current2 ? current2.data : 0) - borrow;
            if (diff < 0) {
                borrow = 1;
                result.insert(diff + 10);
            } else {
                borrow = 0;
                result.insert(diff);
            }
            
            if (current1) current1 = current1.next;
            if (current2) current2 = current2.next;
        }
        
        return result;
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

const elements1 = prompt("Enter space-separated integers for the first linked list:").split(" ").map(Number);
const list1 = new LinkedList();
for (const element of elements1) {
    list1.insert(element);
}
const elements2 = prompt("Enter space-separated integers for the second linked list:").split(" ").map(Number);
const list2 = new LinkedList();
for (const element of elements2) {
    list2.insert(element);
}
const result = list1.subtract(list2);
console.log(result.toString());
