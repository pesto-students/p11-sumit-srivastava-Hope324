function findNonDuplicateElement(arr) {
  const nonduplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        nonduplicate.push(arr[j]);
      }
    }
  }
  return nonduplicate;
}

//const inputArray = prompt("Enter space-separated numbers: ");
const inputArray = [1, 2, 1, 2, 3];
console.log(findNonDuplicateElement(inputArray));
