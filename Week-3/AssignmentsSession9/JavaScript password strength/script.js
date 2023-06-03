// Your solution goes here
function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (password.includes("password")) {
    return false;
  }

  if (password.toLowerCase() === password) {
    return false;
  }

  return true;
}

isStrongPassword("Qwerty");
isStrongPassword("passwordQwerty");
isStrongPassword("qwerty123");
isStrongPassword("Qwerty123");
