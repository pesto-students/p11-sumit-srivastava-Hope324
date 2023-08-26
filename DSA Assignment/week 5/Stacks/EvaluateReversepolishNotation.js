function evaluateRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(operand1 + operand2);
                    break;
                case "-":
                    stack.push(operand1 - operand2);
                    break;
                case "*":
                    stack.push(operand1 * operand2);
                    break;
                case "/":
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
            }
        }
    }

    return stack[0];
}


const inputExpression = prompt("Enter the space-separated tokens in RPN format:")
const tokens = inputExpression.split(" ");
const result = evaluateRPN(tokens);
console.log(result);
