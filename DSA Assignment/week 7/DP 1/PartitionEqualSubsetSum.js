function canPartition(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0); 
    
    if (totalSum % 2 !== 0) {
        return false; 
    }
    
    const targetSum = totalSum / 2; // Calculate target sum for each subset
    const dp = new Array(targetSum + 1).fill(false); // Dynamic programming array
    
    dp[0] = true; // Base case: empty subset can have a sum of 0
    
    for (const num of nums) {
        for (let sum = targetSum; sum >= num; sum--) {
            if (dp[sum - num]) {
                dp[sum] = true; // Update dp array if including current number reaches sum
            }
        }
    }
    
    return dp[targetSum]; // Return true if targetSum can be achieved
}

// Take input from the user for the set of positive integers
const input = prompt("Enter the set of positive integers (space-separated):");
const nums = input.split(" ").map(Number);

// Check if the set can be partitioned into two equal-sum subsets
const canPartitionResult = canPartition(nums);

// Display the result
console.log(`Can the set be partitioned into two equal-sum subsets? ${canPartitionResult}`);
