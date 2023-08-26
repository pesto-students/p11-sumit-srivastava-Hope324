function isValidParentheses(s) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (const char of s) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            const lastOpeningBracket = stack.pop();
            const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            if (lastOpeningBracket !== matchingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
const inputString = prompt("Enter the string containing parentheses:");
const result = isValidParentheses(inputString);
console.log(result);
