
function checkForDuplicates(arr) {
    const numMap = new Map();

    for (const num of arr) {
        if (numMap.has(num)) {
            return true; // Duplicate found
        } else {
            numMap.set(num, 1);
        }
    }

    return false;
}
function parseInput(input) {
    return input.trim().split(" ").map(Number);
}

function runCheckForDuplicates() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the array of integers separated by spaces: ", (input) => {
        const arr = parseInput(input);
        const hasDuplicates = checkForDuplicates(arr);

        if (hasDuplicates) {
            console.log("There are duplicate elements in the array.");
        } else {
            console.log("There are no duplicate elements in the array.");
        }

        rl.close();
    });
}
runCheckForDuplicates();
