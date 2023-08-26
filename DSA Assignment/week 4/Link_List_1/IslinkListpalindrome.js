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
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}

function findMiddleNode(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

function isPalindrome(head) {
    const middle = findMiddleNode(head);
    const reversedHalf = reverseLinkedList(middle);
    
    let current1 = head;
    let current2 = reversedHalf;
    
    while (current2 !== null) {
        if (current1.val !== current2.val) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    
    return true;
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

// Read input from user
const arr = prompt("Enter space-separated integers:").split(" ").map(Number);
const head = createLinkedListFromArray(arr);

// Calculate and print the result
const result = isPalindrome(head);
console.log(result);
