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
    
    findIntersectionPoint(anotherList) {
        let length1 = 0;
        let length2 = 0;
        let current1 = this.head;
        let current2 = anotherList.head;
        
        while (current1 !== null) {
            length1++;
            current1 = current1.next;
        }
        
        while (current2 !== null) {
            length2++;
            current2 = current2.next;
        }
        
        current1 = this.head;
        current2 = anotherList.head;
        
        const lengthDifference = Math.abs(length1 - length2);
        if (length1 > length2) {
            for (let i = 0; i < lengthDifference; i++) {
                current1 = current1.next;
            }
        } else {
            for (let i = 0; i < lengthDifference; i++) {
                current2 = current2.next;
            }
        }
        
        while (current1 !== null && current2 !== null) {
            if (current1 === current2) {
                return current1.data;
            }
            current1 = current1.next;
            current2 = current2.next;
        }
        
        return "No Intersection Point";
    }
}
const elements1 = prompt("Enter space-separated integers for list1:").split(" ").map(Number);
const list1 = new LinkedList();
for (const element of elements1) {
    list1.insert(element);
}
const elements2 = prompt("Enter space-separated integers for list2:").split(" ").map(Number);
const list2 = new LinkedList();
for (const element of elements2) {
    list2.insert(element);
}
const intersectionPoint = list1.findIntersectionPoint(list2);
console.log(intersectionPoint);
