
function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }
    const firstChar = str.charAt(0);
    const remainingString = str.substring(1);
    const reversedSubstring = reverseString(remainingString);
    return reversedSubstring + firstChar;
}
function runReverseString() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter the string: ", (input) => {
        const reversedString = reverseString(input);
        console.log("Reversed String:", reversedString);
        rl.close();
    });
}

// Run the reverseString function
runReverseString();
