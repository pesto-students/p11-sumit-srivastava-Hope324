
function reverseNumber(number) {
    let reversedNumber = 0;
    while (number !== 0) {
        const lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}
function runTestCases(testCases) {
    for (let i = 0; i < testCases.length; i++) {
        const number = testCases[i];
        const reversedNumber = reverseNumber(number);
        
        console.log(`Test Case ${i + 1}:`);
        console.log("Input:", number);
        console.log("Reversed Number:", reversedNumber);
        console.log();
    }
}
const testCases = [
    12345,
    100,
];
runTestCases(testCases);
