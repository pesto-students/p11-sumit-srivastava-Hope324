function kthElement(arr1, arr2, k) {
    const n1 = arr1.length;
    const n2 = arr2.length;

    let left = Math.min(arr1[0], arr2[0]);
    let right = Math.max(arr1[n1 - 1], arr2[n2 - 1]);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const count1 = countLessOrEqual(arr1, mid);
        const count2 = countLessOrEqual(arr2, mid);
        const total = count1 + count2;

        if (total < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

function countLessOrEqual(arr, target) {
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            count = mid + 1;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return count;
}
const arr1 = prompt("Enter elements of arr1 separated by spaces: ")
    .split(" ")
    .map(Number);
const arr2 = prompt("Enter elements of arr2 separated by spaces: ")
    .split(" ")
    .map(Number);
const k = parseInt(prompt("Enter the value of K: "));
const result = kthElement(arr1, arr2, k);
console.log(result);
