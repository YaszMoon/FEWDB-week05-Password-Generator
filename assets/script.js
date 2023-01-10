// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Create characterOptions array for generating password
  var characterOptions = [];

  // Prompt: Lowercase characters
  var addLowercase = confirm("Would you like to include Lowercase characters?");
  if (addLowercase == true) {
    characterOptions = characterOptions.concat(lowerCasedCharacters);
  }

  // Prompt: Uppercase characters
  var addUppercase = confirm("Would you like to include Uppercase characters?");
  if (addUppercase == true) {
    characterOptions = characterOptions.concat(upperCasedCharacters);
  }

  // Prompt: Numeric characters
  var addNumeric = confirm("Would you like to include Numeric characters?");
  if (addNumeric == true) {
    characterOptions = characterOptions.concat(numericCharacters);
  }

  // Prompt: Special characters
  var addSpecialChars = confirm(
    "Would you like to include Special characters?"
  );
  if (addSpecialChars == true) {
    characterOptions = characterOptions.concat(specialCharacters);
  }

  return characterOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var n = Math.floor(Math.random() * arr.length + 1);
  return n;
}

// Function to generate password with user input
function generatePassword() {
  // Prompt: Password length
  for (var i = 0; i < 1; i++) {
    var characterAmount = prompt("How many characters should the password be?");
    // If password length less than minimum of 10, user is prompted again.
    if (characterAmount < 10) {
      alert(
        "Your password must be at least 10 characters long. \nPlease type another password length."
      );
      i = i - 1;
    } 
    // If password length greater than maximum of 64, user is prompted again.
    else if (characterAmount > 64) {
      alert(
        "Your password can only be a maximum of 64 characters. \nPlease type another password length."
      );
      i = i - 1;
    }
  }

  // Create array of characters that user wants used in password
  var arr = getPasswordOptions();

  // Create empty string to append characters for password
  var newPassword = ""

  // Get X number of random characters based on desired password length
  for (var i = 0; i < characterAmount; i++) {
    var n = getRandom(arr);
    newPassword = newPassword + arr[n]
  }

  return newPassword
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
