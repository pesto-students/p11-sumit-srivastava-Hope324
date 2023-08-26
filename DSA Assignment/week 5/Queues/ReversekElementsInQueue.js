function reverseKElements(queue, K) {
    const stack = [];
    const modifiedQueue = [];
    for (let i = 0; i < K; i++) {
        stack.push(queue.shift());
    }
    while (stack.length > 0) {
        modifiedQueue.push(stack.pop());
    }
    while (queue.length > 0) {
        modifiedQueue.push(queue.shift());
    }

    return modifiedQueue;
}
const inputQueue = prompt("Enter the space-separated integers for the queue:")
const queueArray = inputQueue.split(" ").map(Number);
const K = parseInt(prompt("Enter the value of K:"));
const result = reverseKElements(queueArray, K);
console.log(result.join(" "));
