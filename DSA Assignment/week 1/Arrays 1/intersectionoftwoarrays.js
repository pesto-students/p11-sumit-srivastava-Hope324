// ## Problem Statement:
// Intersection of Two Arrays

// ## Problem Statement:
// Take 2 arrays from as an input and return the
// intersection of the two arrays.
// Intersection is the common elements in both
// the arrays.

function findIntersection(arr1Str, arr2Str) {
    const arr1 = arr1Str.split(",").map(Number);
    const arr2 = arr2Str.split(",").map(Number);
    const set = new Set(arr1);
    const intersection = [];
    for (const num of arr2) {
      
      if (set.has(num)) {
        
        intersection.push(num);
        set.delete(num);
      }
    }
  
    
    return intersection;
  }
  const inputStr1 = "1,2,3,4,5";
  const inputStr2 = "4,5,6,7,8";
  console.log("Output:", findIntersection(inputStr1, inputStr2));
  
  const inputStr3 = "1,2,3,4,5";
  const inputStr4 = "5,4,3,2,1";
  console.log("Output:", findIntersection(inputStr3, inputStr4));
  