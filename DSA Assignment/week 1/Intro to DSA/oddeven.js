function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  const number1 = parseInt(prompt("Enter a number:"));
  console.log("Output:", checkEvenOdd(number1));
  