function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}
const input = prompt("Enter the array elements separated by spaces: ")
    .split(" ")
    .map(Number);
const result = findMin(input);
console.log(result);
