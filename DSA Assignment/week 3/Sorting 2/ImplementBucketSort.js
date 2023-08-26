function bucketSort(arr) {
    const n = arr.length;
    const evenBucket = [];
    const oddBucket = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            evenBucket.push(arr[i]);
        } else {
            oddBucket.push(arr[i]);
        }
    }
    evenBucket.sort((a, b) => a - b);
    oddBucket.sort((a, b) => a - b);
    return evenBucket.concat(oddBucket);
}
const input = prompt("Enter numbers as a space-separated string: ");
const numbers = input.split(" ").map(Number);
const sortedArray = bucketSort(numbers);
console.log(sortedArray.join(" "));
