function nextGreaterElements(nums) {
    const stack = [];
    const result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(nums[i]);
    }

    return result;
}
const inputNumbers = prompt("Enter the comma space-separated integers:")
const nums = inputNumbers.split(",").map(Number);
const result = nextGreaterElements(nums);
console.log(result.join(", "));
