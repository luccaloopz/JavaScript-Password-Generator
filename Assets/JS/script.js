// Assignment Code
var generateBtn = document.querySelector("#generate");

const answeryes = "yes"
const answerno = "no"

var lowercaseDecision;
var lowercaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseDecision;
var uppercaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var numbersDecision;
var numbersValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var specialDecision;
var specialValues = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?" , "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


var charactersToInclude = [];

var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  alert("You will now begin choosing your password criteria.")
  issuePrompts();
  if (charactersToInclude) {
    var randomize;
    var password = [];
    for (i = 0; i < passwordLength; i++) {
      randomize = Math.floor(Math.random() * charactersToInclude.length);
      password += charactersToInclude[randomize];

      console.log(randomize);
      console.log(password);
    }
    console.log(password);
  }
  return password
}

function issuePrompts() {
  characterLength();
  characterType();
  validateUserChoice();
}

function characterLength() {
  passwordLength = prompt("How many characters do you want your password to be comprised of?");
  console.log(typeof(passwordLength))
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength
  }
  else {
    confirm("Passwords must be at least 8 characters and no more than 128 characters.")
    characterLength();
  }
};

function characterType() { 
  var resultLC = confirmLowercase();
  if (resultLC === answeryes) { 
    lowercaseDecision = true
    console.log(lowercaseDecision);
  }
  else if (resultLC === answerno) {
    lowercaseDecision = false 
    console.log(lowercaseDecision);
  };
  var resultUC = confirmUppercase();
  if (resultUC === answeryes) {
    uppercaseDecision = true;
    console.log(uppercaseDecision);
  }
  else if (resultUC === answerno) {
    uppercaseDecision = false;
    console.log(uppercaseDecision);
  };
  var resultN = confirmNumeric();
  if (resultN === answeryes) {
    numbersDecision = true;
    console.log(numbersDecision);
  }
  else if (resultN === answerno) {
    numbersDecision = false;
    console.log(numbersDecision);
  };
  var resultS = confirmSpecialCharacters();
  if (resultS === answeryes) {
    specialDecision = true;
    console.log(specialDecision);
  }
  else if (resultS === answerno) {
    specialDecision = false;
    console.log(specialDecision);
  };
};

function confirmLowercase() {
  var lowercase = prompt("Do you want your password to contain lowercase characters? Please answer 'yes' or 'no'.")
  lowercase = lowercase.toLowerCase()
  if (lowercase === "yes") {
    return answeryes;
  }
  else if (lowercase === "no") {
    return answerno
  }
}

function confirmUppercase() {
  var uppercase = prompt("Do you want your password to contain uppercase characters? Please answer 'yes' or 'no'.")
  uppercase = uppercase.toLowerCase()
  if (uppercase === "yes") {
    return answeryes
  }
  else if (uppercase === "no") {
    return answerno
  }
}

function confirmNumeric() {
  var numeric = prompt("Do you want your password to contain numeric characters? Please answer 'yes' or 'no'.")
  numeric = numeric.toLowerCase()
  if (numeric === "yes") {
    return answeryes
  }
  else if (numeric === "no") {
    return answerno
  }
}

function confirmSpecialCharacters() {
  var special = prompt("Do you want your password to contain special characters? Please answer 'yes' or 'no'.")
  special = special.toLowerCase()
  if (special === "yes") {
    return answeryes
  }
  else if (special === "no") {
    return answerno
  }
}

function validateUserChoice() {
  if (lowercaseDecision) {
    charactersToInclude = charactersToInclude.concat(lowercaseValues);
  }
  if (uppercaseDecision) {
    charactersToInclude = charactersToInclude.concat(uppercaseValues);
  }
  if (numbersDecision) {
    charactersToInclude = charactersToInclude.concat(numbersValues);
  }
  if (specialDecision) {
    charactersToInclude = charactersToInclude.concat(specialValues);
  }
  console.log(charactersToInclude);
}