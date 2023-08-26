function rearrangeQueue(inputQueue) {
    const evenQueue = [];
    const oddQueue = [];

    for (let i = 0; i < inputQueue.length; i++) {
        const num = inputQueue[i];
        if (num % 2 === 0) {
            evenQueue.push(num);
        } else {
            oddQueue.push(num);
        }
    }

    return evenQueue.concat(oddQueue);
}
const input = prompt("Enter the elements of the queue separated by spaces:")
const inputQueue = input.split(" ").map(Number);
const result = rearrangeQueue(inputQueue);
console.log(result);
