// Put your solution here

function divideArray(num) {
  let oddNum = [];
  let evenNum = [];

  for (var i = 0; i <= num.length; i++) {
    if (num[i] % 2 == 0) {
      evenNum.push(num[i]);
    } else {
      oddNum.push(num[i]);
    }
  }
  if (oddNum.length == 0) {
    console.log("Odd Numbers:");
    console.log("None");
  } else {
    console.log("Odd Numbers:");
    console.log(oddNum.sort((a, b) => a - b).join("\n"));
  }

  if (evenNum.length == 0) {
    console.log("Even Numbers:");
    console.log("None");
  } else {
    console.log("Even Numbers:");
    console.log(evenNum.sort((a, b) => a - b).join("\n"));
  }
}

let num = [4, 2, 6, 10, 8];
divideArray(num);
