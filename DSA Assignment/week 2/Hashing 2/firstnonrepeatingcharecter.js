// Function to find the first non-repeating character in a string
function findFirstNonRepeatingChar(str) {
    const charMap = new Map();
    for (const char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (const char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    return "No non-repeating characters found";
}

// Function to run the findFirstNonRepeatingChar function with user input
function runFindFirstNonRepeatingChar() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the string: ", (input) => {
        const result = findFirstNonRepeatingChar(input);
        console.log("First Non-Repeating Character:", result);
        rl.close();
    });
}
runFindFirstNonRepeatingChar();
