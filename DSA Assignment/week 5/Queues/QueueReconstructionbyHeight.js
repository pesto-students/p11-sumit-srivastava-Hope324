function reconstructQueue(people) {
    people.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    const reconstructedQueue = [];
    for (const person of people) {
        reconstructedQueue.splice(person[1], 0, person);
    }

    return reconstructedQueue;
}
const input = prompt("Enter the pairs of heights and number of people in front separated by spaces:")
const inputArray = input.split(" ").map(pair => pair.split(",").map(Number));

const result = reconstructQueue(inputArray);
console.log(result);
