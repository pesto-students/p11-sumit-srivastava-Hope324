function findPeakElement(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if ((mid === 0 || nums[mid] > nums[mid - 1]) &&
            (mid === nums.length - 1 || nums[mid] > nums[mid + 1])) {
            return mid;
        } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}
const n = parseInt(prompt("Enter the size of the array:"));
const input = prompt("Enter the elements of the array separated by spaces:")
    .split(" ")
    .map(Number);
const result = findPeakElement(input);
console.log(result);
