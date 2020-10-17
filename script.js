// Assignment Code //
var generateBtn = document.querySelector("#generate");

// Possible characters password may contain:
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-+=;/?.,><";
var numbers = "1234567890";

// Criteria to generate random password based on user input.
// User input options:
function generatePassword() {
  var passwordLength = prompt("Please enter desired password length.")
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 character in length.")
    passwordLength = prompt("Please enter desired password length.")
  }
  var specialCharConfirm = confirm("Do you want your password to contain special characters?");
  var numbConfirm = confirm("Do you want your password to contain numbers?");
  var upperCaseConfirm = confirm("Do you want your password to contain uppercase letters?");

  // Random selection to generate password pulling from user's input from the above prompts.
  var possibleChar = lowerCase.split("");
  console.log(possibleChar);

  if (upperCaseConfirm) {
    possibleChar = possibleChar.concat(upperCase.split(""));
    console.log(possibleChar);
  }

  if (specialCharConfirm) {
    possibleChar = possibleChar.concat(specialChar.split(""));
    console.log(possibleChar);
  }

  if (numbConfirm) {
    possibleChar = possibleChar.concat(numbers.split(""));
    console.log(possibleChar);
  }
  var newpassword = "";
  for (var i = 0; i < passwordLength; i++) {
    newpassword += possibleChar[Math.floor(Math.random() * possibleChar.length) + 0];
  }

  console.log(newpassword);

  return newpassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
