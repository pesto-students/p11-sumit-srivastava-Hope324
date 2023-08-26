class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function quickSortLinkedList(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    const pivot = head.val;
    let lessThanPivotHead = null;
    let lessThanPivotTail = null;
    let equalToPivotHead = null;
    let equalToPivotTail = null;
    let greaterThanPivotHead = null;
    let greaterThanPivotTail = null;
    
    let current = head;
    
    while (current !== null) {
        if (current.val < pivot) {
            if (lessThanPivotHead === null) {
                lessThanPivotHead = current;
                lessThanPivotTail = current;
            } else {
                lessThanPivotTail.next = current;
                lessThanPivotTail = current;
            }
        } else if (current.val === pivot) {
            if (equalToPivotHead === null) {
                equalToPivotHead = current;
                equalToPivotTail = current;
            } else {
                equalToPivotTail.next = current;
                equalToPivotTail = current;
            }
        } else {
            if (greaterThanPivotHead === null) {
                greaterThanPivotHead = current;
                greaterThanPivotTail = current;
            } else {
                greaterThanPivotTail.next = current;
                greaterThanPivotTail = current;
            }
        }
        
        current = current.next;
    }
    
    if (lessThanPivotTail !== null) {
        lessThanPivotTail.next = null;
    }
    if (equalToPivotTail !== null) {
        equalToPivotTail.next = null;
    }
    if (greaterThanPivotTail !== null) {
        greaterThanPivotTail.next = null;
    }
    
    const sortedLessThanPivot = quickSortLinkedList(lessThanPivotHead);
    const sortedGreaterThanPivot = quickSortLinkedList(greaterThanPivotHead);
    
    let sortedHead = null;
    let sortedTail = null;
    
    if (sortedLessThanPivot !== null) {
        sortedHead = sortedLessThanPivot;
        sortedTail = lessThanPivotTail;
    }
    
    if (equalToPivotHead !== null) {
        if (sortedTail !== null) {
            sortedTail.next = equalToPivotHead;
        } else {
            sortedHead = equalToPivotHead;
        }
        sortedTail = equalToPivotTail;
    }
    
    if (sortedGreaterThanPivot !== null) {
        if (sortedTail !== null) {
            sortedTail.next = sortedGreaterThanPivot;
        } else {
            sortedHead = sortedGreaterThanPivot;
        }
    }
    
    return sortedHead;
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
const linkedList = createLinkedListFromArray(arr);

// Perform quicksort on the linked list and convert the result to an array
const sortedLinkedList = quickSortLinkedList(linkedList);
const sortedArray = convertLinkedListToArray(sortedLinkedList);

// Print the sorted linked list
console.log(sortedArray);
