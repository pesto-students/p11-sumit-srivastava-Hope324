function countingSort(arr) {
    const n = arr.length;
    const max = Math.max(...arr);
    const countingArray = new Array(max + 1).fill(0);
    for (let i = 0; i < n; i++) {
        countingArray[arr[i]]++;
    }
    for (let i = 1; i <= max; i++) {
        countingArray[i] += countingArray[i - 1];
    }
    const sortedArray = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        sortedArray[countingArray[arr[i]] - 1] = arr[i];
        countingArray[arr[i]]--;
    }

    return sortedArray;
}
const input = prompt("Enter positive integers as a comma-separated string: ");
const integers = input.split(",").map(Number);
const sortedArray = countingSort(integers);
sortedArray.forEach(num => console.log(num));
