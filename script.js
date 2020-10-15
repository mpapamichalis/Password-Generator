// Assignment Code
var generateBtn = document.querySelector("#generate");
function getPasswordOptions() {
  var pwdLength = prompt("How many characters do you want your password to be?");
  if (pwdLength < 8) {
    alert("Password must have a minimum of 8 characters.");

    return
  }
  if (pwdLength > 128) {
    alert("Password can't exceed 128 characters.")

    return
  }
  var hasSpecialCharacters = confirm("Do you want your password to contain special characters?");
  var hasNumbers = confirm("Do you want your password to contain numbers?");
  var hasUpperCase= confirm ("Do you want your password to contain uppercase letters?");
  var hasLowerCase= confirm ("Do you want your password to contain lower case letters?");

  if (hasSpecialCharacters === false && 
    hasNumbers === false &&
    hasUpperCase === false &&
    hasLowerCase === false) {
      alert("You must choose one option.")
      return
    }

      
    }

  var getPasswordOptions = {
    length: pwdLength,
    specialCharacters: hasSpecialCharacters,
    numericCharacters: hasNumbers,
    upperCase: hasUpperCase,
    lowerCase: hasLowerCase
  }
  return getPasswordOptions
}


function generatePassword() {
  var userChoices = getPasswordOptions();
  var pwdLength = userChoices.length
  var hasSpecialCharacters = userChoices.specialCharacters
  var hasNumbers = userChoices.numericCharacters
  var hasUpperCase = userChoices.upperCase
  var hasLowerCase = userChoices.lowerCase 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);
