// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",",",")","?","/",";",":","~"];

// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var numbers = "0123456789"
// var specialChar = "~!@#$%^&*()_+=-`"

// user selection and final generated password
// var userSelection = [];

// generate password function

function generatePassword() {

  var userSelection = [];
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
var upperC = confirm("Would you lke uppercase letters?");
if (upperC) {
  userSelection.concat(upperCase);
}

// lowercase prompt
var lowerC = confirm("Would you like lowercase letters?");
if (lowerC) {
  userSelection.concat(lowerCase);
}

// special characters prompt
var specialC = confirm("Would you like special characters?");
if (specialC) {
  userSelection.concat(specialChar);
}

// numbers prompt
var numb = confirm("Would you like to add numbers?");
if(numb) {
  userSelection.concat(numbers);
}

console.log(userSelection);

// if (userSelection.length === 0) {
  // alert ("You haven't selected enough criteria to make a password! Try again.")
  // generatePassword()
  // }


//  for (var i = 0; i < userSelection; i++) {
//     var randomIndex = Math.floor(Math.random() * userSelection);
//     var random = userSelection.charAt(randomIndex);
//   }


  // for (var i = userSelection.length - 1; i > 0; i--) {
  //   var newPass = Math.floor(Math.random() * (i + 1));
  //   var temp = userSelection [i]
  //   userSelection [i] = userSelection [j];
  //   userSelection [j] = temp;
  //   return newPass;
  // }

  // for (var i = 0; i <= passLength; i++) {
  //   var randomNumber = Math.floor(Math.random() * userSelection.length);
  //   finalPassword += userSelection.substring(randomNumber, randomNumber +1);
  // }
  
};



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

