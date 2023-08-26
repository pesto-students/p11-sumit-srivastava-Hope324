function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "Yes";
    } else {
      return "No";
    }
  }
  
  const year1 = parseInt(prompt("Enter a year:"));
  console.log("Output:", isLeapYear(year1));
  