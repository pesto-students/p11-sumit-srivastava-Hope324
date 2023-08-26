class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function removeDuplicates(head) {
    const uniqueValues = new Set();
    let current = head;
    let previous = null;

    while (current !== null) {
        if (uniqueValues.has(current.val)) {
            previous.next = current.next;
        } else {
            uniqueValues.add(current.val);
            previous = current;
        }
        current = current.next;
    }

    return head;
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
const linkedList = createLinkedListFromArray(arr);
const deduplicatedLinkedList = removeDuplicates(linkedList);
const deduplicatedArray = convertLinkedListToArray(deduplicatedLinkedList);

// Print the deduplicated linked list
console.log(deduplicatedArray);
