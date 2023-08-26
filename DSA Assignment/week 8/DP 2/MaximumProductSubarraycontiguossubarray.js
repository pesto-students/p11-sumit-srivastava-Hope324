function maxProductSubarray(nums) {
    const n = nums.length;
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < n; i++) {
        if (nums[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        result = Math.max(result, maxProduct);
    }

    return result;
}

// Take input from the user
const input = prompt("Enter an array of integers separated by spaces:")
const nums = input.split(' ').map(Number);

// Calculate the maximum product subarray
const maxProduct = maxProductSubarray(nums);

// Print the result
console.log("Maximum product subarray:", maxProduct);
