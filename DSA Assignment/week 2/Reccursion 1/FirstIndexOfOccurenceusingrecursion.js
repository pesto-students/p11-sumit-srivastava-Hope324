
function firstIndexOf(arr, target, index) {
    if (index === arr.length) {
        return -1;
    }
    if (arr[index] === target) {
        return index;
    }
    return firstIndexOf(arr, target, index + 1);
}

// Function to parse the input string into an array of integers
function parseInput(input) {
    return input.split(" ").map(Number);
}

// Function to run the firstIndexOf function with user input
function runFirstIndexOf() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the array of integers in space-separated format: ", (arrStr) => {
        rl.question("Enter the target value: ", (targetStr) => {
            const arr = parseInput(arrStr);
            const target = Number(targetStr);
            const index = firstIndexOf(arr, target, 0);
            console.log("First Index of Occurrence:", index);
            rl.close();
        });
    });
}

// Run the firstIndexOf function
runFirstIndexOf();
