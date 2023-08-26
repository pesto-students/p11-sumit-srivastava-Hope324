function selectionSortStrings(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {

            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
const input = prompt("Enter strings as a comma-separated string: ");
const strings = input.split(",");

const sortedArray = selectionSortStrings(strings);
console.log(sortedArray);
