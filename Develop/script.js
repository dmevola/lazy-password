// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()?/;:~";

// user selection and final generated password
var userSelection = [];
var finalPassword = [];

// generate password function

function generatePassword() {

  // password length prompt

  var passLength = prompt("Please enter a number between 8 and 128");
  if (passLength < 8) {
    alert ("Please enter a number between 8 and 128");
    generatePassword();
  }
  if (passLength > 128) {
    alert ("Please enter a number between 8 and 128");
    generatePassword();
  }

  // uppercase prompt
var upperC = confirm("Would you lke Uppercase Letters?");
if (upperC) {
  userSelection.push(upperCase);
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

