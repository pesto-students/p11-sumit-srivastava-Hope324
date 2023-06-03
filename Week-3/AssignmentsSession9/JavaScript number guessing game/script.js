// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
    for (let i = 1; i <= totalGuesses; i++) {
      let guess = prompt(
        i === 1
          ? "Enter a number between 1 and 100."
          : guess < numToGuess
          ? `${guess} is too small. Guess a larger number.`
          : `${guess} is too large. Guess a smaller number.`
      );
      if (guess === null) {
        return 0;
      }
      guess = parseInt(guess);
      if (isNaN(guess)) {
        alert("Please enter a number.");
        i--;
        continue;
      }
      if (guess === numToGuess) {
        return i;
      }
    }
    return 0;
  }
  playGuessingGame(5);
  playGuessingGame(7, 3);