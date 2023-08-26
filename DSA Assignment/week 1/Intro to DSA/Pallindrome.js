function isPalindrome(number) {
    const originalNumber = number;
    let reversedNumber = 0;
  
    for (let n = number; n > 0; n = Math.floor(n / 10)) {
      const lastDigit = n % 10;
      reversedNumber = reversedNumber * 10 + lastDigit;
    }
  
    return originalNumber === reversedNumber ? "Yes" : "No";
  }
  
  // Test cases
  const number1 = parseInt(prompt("Enter a number:"));
  console.log("Test Case 1");
  console.log("Input:", number1);
  console.log("Output:", isPalindrome(number1)); // Output should be "Yes" for palindrome number 12321
  
  const number2 = parseInt(prompt("Enter a number:"));
  console.log("\nTest Case 2");
  console.log("Input:", number2);
  console.log("Output:", isPalindrome(number2)); // Output should be "No" for non-palindrome number 12345
  