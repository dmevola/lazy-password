// generate password function
function generatePassword() {

// password length prompt and logic to ensure is a number bigger than 8 and smaller than 128
var passLength = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(passLength) || passLength < 8 || passLength > 128) passLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

// prompts for upper case, lower case, numbers, and symbols
var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

// guard rail to ensure at least one character type is selected
while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

  var password = "";

  // adds in randomized character sets to password string
  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

// randomize 
  for (var i = password.length; i < passLength; i++) password += rando(rando(allowed).value);

  return password;
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;
document.querySelector("#generate").textContent = "Presto! Another?"; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
window.addEventListener("keypress", writePassword);