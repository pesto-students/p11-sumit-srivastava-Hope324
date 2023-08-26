function reverseQueue(queue) {
    const stack = [];
    const reversedQueue = [];
    for (const num of queue) {
        reversedQueue.push(num);
    }
    while (reversedQueue.length > 0) {
        stack.push(reversedQueue.shift());
    }
    while (stack.length > 0) {
        reversedQueue.push(stack.pop());
    }

    return reversedQueue;
}
const input = prompt("Enter the space-separated integers for the queue:")
const inputArray = input.split(" ").map(Number);
const result = reverseQueue(inputArray);
console.log(result.join(" "));
