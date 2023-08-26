
function parseInput(input) {
    return input.split(" ").map(Number);
}
function generateSubsets(arr, index, currentSubset, powerSet) {
    if (index === arr.length) {
        powerSet.push(currentSubset.slice());
        return;
    }
    currentSubset.push(arr[index]);
    generateSubsets(arr, index + 1, currentSubset, powerSet);
    currentSubset.pop();
    generateSubsets(arr, index + 1, currentSubset, powerSet);
}

// Function to generate the power set of a set of distinct integers
function powerSetGenerator(arr) {
    const powerSet = [];
    generateSubsets(arr, 0, [], powerSet);
    return powerSet;
}

// Function to run the powerSetGenerator function with user input
function runPowerSetGenerator() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the set of distinct integers in space-separated format: ", (input) => {
        const arr = parseInput(input);
        const powerSet = powerSetGenerator(arr);
        console.log("Power Set:", powerSet);
        rl.close();
    });
}

// Run the powerSetGenerator function
runPowerSetGenerator();
