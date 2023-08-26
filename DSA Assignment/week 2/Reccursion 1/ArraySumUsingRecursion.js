
function arraySum(arr) {
    
    if (arr.length === 0) {
        return 0;
    }
    const firstElement = arr[0];
    const remainingSum = arraySum(arr.slice(1));

    return firstElement + remainingSum;
}
function parseInput(input) {
    return JSON.parse(input);
}
function runArraySum() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the array of integers in JSON format: ", (input) => {
        const arr = parseInput(input);
        const sum = arraySum(arr);
        console.log("Sum of Array Elements:", sum);
        rl.close();
    });
}
runArraySum();
