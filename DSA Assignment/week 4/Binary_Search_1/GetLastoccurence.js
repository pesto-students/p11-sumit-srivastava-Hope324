function getLastOccurrence(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let lastOccurrence = -1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        if (nums[middle] === target) {
            lastOccurrence = middle;
            if (middle === nums.length - 1 || nums[middle + 1] > target) {
                return lastOccurrence;
            }
            low = middle + 1;
        } else if (nums[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return lastOccurrence;
}
const nums = prompt("Enter space-separated integers representing the sorted array: ")
    .split(" ")
    .map(Number);
const target = parseInt(prompt("Enter the target value: "));
const lastOccurrenceIndex = getLastOccurrence(nums, target);
console.log(lastOccurrenceIndex);
