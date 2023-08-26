function isTargetPresent(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        if (nums[middle] === target) {
            return true;
        } else if (nums[middle] < target) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return false;
}
const nums = prompt("Enter space-separated integers representing the sorted array: ")
    .split(" ")
    .map(Number);
const target = parseInt(prompt("Enter the target value: "));
const result = isTargetPresent(nums, target);
console.log(result);
