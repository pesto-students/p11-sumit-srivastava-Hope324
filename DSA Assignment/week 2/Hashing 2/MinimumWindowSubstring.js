function minWindowSubstring(str1, str2) {
  const targetCount = new Map();
  for (const char of str2) {
    targetCount.set(char, (targetCount.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minWindow = "";
  let requiredCount = str2.length;
  while (right < str1.length) {
    const char = str1[right];
    if (targetCount.has(char)) {
      if (targetCount.get(char) > 0) {
        requiredCount--;
      }
      targetCount.set(char, targetCount.get(char) - 1);
    }
    right++;
    while (requiredCount === 0) {
      const currentWindowLength = right - left;
      if (currentWindowLength < minLength) {
        minLength = currentWindowLength;
        minWindow = str1.slice(left, right);
      }

      const leftChar = str1[left];
      if (targetCount.has(leftChar)) {
        targetCount.set(leftChar, targetCount.get(leftChar) + 1);
        if (targetCount.get(leftChar) > 0) {
          requiredCount++;
        }
      }
      left++;
    }
  }

  return minWindow;
}
function runMinWindowSubstring() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the first string: ", (str1) => {
    rl.question("Enter the second string: ", (str2) => {
      const result = minWindowSubstring(str1, str2);
      console.log("Minimum Window Substring:", result);
      rl.close();
    });
  });
}

runMinWindowSubstring();
