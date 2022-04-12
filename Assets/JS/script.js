// Assignment Code
var generateBtn = document.querySelector("#generate");

const answeryes = "yes";
const answerno = "no";

var lowercaseDecision;
var lowercaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseDecision;
var uppercaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var numbersDecision;
var numbersValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var specialDecision;
var specialValues = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?" , "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


var charactersToInclude = [];

var password = "";

var passwordLength;

// Write password to the #password input
function writePassword() {
  var passwordFinal = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  alert("You will now begin choosing your password criteria.");
  issuePrompts();
  if (charactersToInclude.length > 0) {
    var randomize;
    for (i = password.length; i < passwordLength; i++) {
      randomize = Math.floor(Math.random() * charactersToInclude.length);
      password += charactersToInclude[randomize];
    }
    return password;
  } else {
    alert("You must choose at least one character type.");
    return "";
  };
  
};

function issuePrompts() {
  characterLength();
  characterType();
  validateUserChoice();
};

function characterLength() {
  passwordLength = prompt("How many characters do you want your password to be comprised of?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  else {
    confirm("Passwords must be at least 8 characters and no more than 128 characters.");
    characterLength();
  };
};

function characterType() { 
  var resultLC = confirmLowercase();
  if (resultLC === answeryes) { 
    lowercaseDecision = true;
  }
  else if (resultLC === answerno) {
    lowercaseDecision = false;
  };
  var resultUC = confirmUppercase();
  if (resultUC === answeryes) {
    uppercaseDecision = true;
  }
  else if (resultUC === answerno) {
    uppercaseDecision = false;
  };
  var resultN = confirmNumeric();
  if (resultN === answeryes) {
    numbersDecision = true;
  }
  else if (resultN === answerno) {
    numbersDecision = false;
  };
  var resultS = confirmSpecialCharacters();
  if (resultS === answeryes) {
    specialDecision = true;
  }
  else if (resultS === answerno) {
    specialDecision = false;
  };
};

function confirmLowercase() {
  var lowercase = prompt("Do you want your password to contain lowercase characters? Please answer 'yes' or 'no'.");
  lowercase = lowercase.toLowerCase();
  if (lowercase === "yes") {
    return answeryes;
  }
  else if (lowercase === "no") {
    return answerno;
  };
};

function confirmUppercase() {
  var uppercase = prompt("Do you want your password to contain uppercase characters? Please answer 'yes' or 'no'.");
  uppercase = uppercase.toLowerCase();
  if (uppercase === "yes") {
    return answeryes;
  }
  else if (uppercase === "no") {
    return answerno;
  };
};

function confirmNumeric() {
  var numeric = prompt("Do you want your password to contain numeric characters? Please answer 'yes' or 'no'.");
  numeric = numeric.toLowerCase();
  if (numeric === "yes") {
    return answeryes;
  }
  else if (numeric === "no") {
    return answerno;
  };
};

function confirmSpecialCharacters() {
  var special = prompt("Do you want your password to contain special characters? Please answer 'yes' or 'no'.");
  special = special.toLowerCase();
  if (special === "yes") {
    return answeryes;
  }
  else if (special === "no") {
    return answerno;
  };
};

function validateUserChoice() {
  if (lowercaseDecision) {
    randomize = Math.floor(Math.random() * lowercaseValues.length);
    password += lowercaseValues[randomize];
    charactersToInclude = charactersToInclude.concat(lowercaseValues);
  };
  if (uppercaseDecision) {
    randomize = Math.floor(Math.random() * uppercaseValues.length);
    password += uppercaseValues[randomize];
    charactersToInclude = charactersToInclude.concat(uppercaseValues);
  };
  if (numbersDecision) {
    randomize = Math.floor(Math.random() * numbersValues.length);
    password += numbersValues[randomize];
    charactersToInclude = charactersToInclude.concat(numbersValues);
  };
  if (specialDecision) {
    randomize = Math.floor(Math.random() * specialValues.length);
    password += specialValues[randomize];
    charactersToInclude = charactersToInclude.concat(specialValues);
  };
};