
function fourSum(nums, target) {
    const result = [];
    const sumPairs = new Map();

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            const complement = target - sum;

            if (sumPairs.has(complement)) {
                for (const pair of sumPairs.get(complement)) {
                    const [a, b] = pair;
                    if (i > b) {
                        result.push([nums[a], nums[b], nums[i], nums[j]]);
                    }
                }
            }

            if (!sumPairs.has(sum)) {
                sumPairs.set(sum, []);
            }
            sumPairs.get(sum).push([i, j]);
        }
    }

    return result;
}

function parseInput(input) {
    return input.trim().split(",").map(Number);
}
function runFourSum() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the array of integers separated by commas: ", (input) => {
        const nums = parseInput(input);
        rl.question("Enter the target sum: ", (target) => {
            const quadruplets = fourSum(nums, parseInt(target));
            console.log("Unique Quadruplets:", quadruplets);
            rl.close();
        });
    });
}

// Run the fourSum function
runFourSum();
