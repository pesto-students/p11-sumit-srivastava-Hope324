// ## Problem Statement:
// Delete elements in an array

// ## Problem Statement:
// Take an array input from the user and delete 
// all the elements which are divisible by 2 and 3

function deleteElementsDivisibleBy2And3(arrStr) {
    const arr = arrStr.split(",").map(Number);
    const filteredArray = arr.filter(num => num % 2 !== 0 && num % 3 !== 0);
    return filteredArray;
  }
  const inputStr1 = "1,2,3,4,5,6,7,8,9";
  console.log("Output:", deleteElementsDivisibleBy2And3(inputStr1));
  