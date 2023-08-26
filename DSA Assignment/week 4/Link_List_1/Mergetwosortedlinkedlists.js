class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1 !== null) {
        current.next = l1;
    }
    
    if (l2 !== null) {
        current.next = l2;
    }
    
    return dummyHead.next;
}

// Helper function to create a linked list from an array
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
const arr1 = prompt("Enter space-separated integers for the first list:").split(" ").map(Number);
const arr2 = prompt("Enter space-separated integers for the second list:").split(" ").map(Number);
const l1 = createLinkedListFromArray(arr1);
const l2 = createLinkedListFromArray(arr2);
const mergedList = mergeTwoLists(l1, l2);
const mergedArray = [];
let current = mergedList;

while (current !== null) {
    mergedArray.push(current.val);
    current = current.next;
}

// Print the merged sorted linked list
console.log(mergedArray);
