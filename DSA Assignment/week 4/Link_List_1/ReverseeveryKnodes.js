class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
}

function reverseKNodes(head, k) {
    if (k <= 1 || head === null) {
        return head;
    }
    
    let current = head;
    let prevTail = null;
    let newHead = null;
    
    while (current !== null) {
        let tail = current;
        let count = 0;
        
        while (count < k && tail !== null) {
            tail = tail.next;
            count++;
        }
        
        if (count === k) {
            const reversedHead = reverseLinkedList(current);
            
            if (prevTail === null) {
                newHead = reversedHead;
            } else {
                prevTail.next = reversedHead;
            }
            
            prevTail = current;
            current = tail;
        } else {
            prevTail.next = current;
        }
    }
    
    return newHead || head;
}
function createLinkedListFromArray(arr) {
    let head = null;
    let current = null;

    for (const val of arr) {
        const newNode = new ListNode(val);
        if (head === null) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = newNode;
        }
    }

    return head;
}
function convertLinkedListToArray(head) {
    const result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}
const arr = prompt("Enter space-separated integers for the linked list:").split(" ").map(Number);
const k = parseInt(prompt("Enter the value of k:"));
const linkedList = createLinkedListFromArray(arr);
const modifiedLinkedList = reverseKNodes(linkedList, k);
const modifiedArray = convertLinkedListToArray(modifiedLinkedList);
console.log(modifiedArray);
