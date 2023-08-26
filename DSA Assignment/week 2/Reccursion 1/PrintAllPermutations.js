function printPermutations(str, start, permutations) {
  if (start === str.length) {
    permutations.push(str);
    return;
  }
  for (let i = start; i < str.length; i++) {
    const chars = str.split("");
    const temp = chars[start];
    chars[start] = chars[i];
    chars[i] = temp;
    printPermutations(chars.join(""), start + 1, permutations);

    const reverseTemp = chars[start];
    chars[start] = chars[i];
    chars[i] = reverseTemp;
  }
}

// Function to print all permutations of a given string
function printAllPermutations(str) {
  const permutations = [];
  printPermutations(str, 0, permutations);
  return permutations;
}

// Function to run the printAllPermutations function with user input
function runPrintAllPermutations() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the string: ", (input) => {
    const permutations = printAllPermutations(input);
    console.log("Permutations:");
    permutations.forEach((perm) => console.log(perm));
    rl.close();
  });
}

// Run the printAllPermutations function
runPrintAllPermutations();
