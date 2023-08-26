
function findIndices(arr, target, index) {
    if (index === arr.length) {
        return [];
    }

    const remainingIndices = findIndices(arr, target, index + 1)
    if (arr[index] === target) {
        remainingIndices.unshift(index);
    }

    // Return the combined result
    return remainingIndices;
}

// Function to run the findIndices function with user input
function runFindIndices() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the array (space-separated integers): ", (input) => {
        const arr = input.split(" ").map(Number);

        rl.question("Enter the target element: ", (target) => {
            const targetIndices = findIndices(arr, Number(target), 0);
            console.log("Indices of the target element:", targetIndices);
            rl.close();
        });
    });
}

// Run the findIndices function
runFindIndices();
