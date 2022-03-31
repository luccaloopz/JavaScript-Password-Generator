// Assignment Code
var generateBtn = document.querySelector("#generate");

const answeryes = "yes"
const answerno = "no"

var lowercaseDecision;

var uppercaseDecision;

var numbersDecision;

var specialDecision;

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
  // if (issuePrompts()) {
  //   "then it generates a password"
  // }
}

function issuePrompts() {
  characterLength();
  characterType();
  // validateUserChoice(); // if ___decision variables are true, assign the var to an array of lowercase, uppercase, numbers, and specials characters
}

function characterLength() {
  var passwordLength = prompt("How many characters do you want your password to be comprised of?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength
  }
  else {
    alert("Passwords must be at least 8 characters and no more than 128 characters.")
    characterLength();
  }
};

function characterType() { 
  var resultLC = confirmLowercase();
  if (resultLC === answeryes) { 
    lowercaseDecision = true
  }
  else if (resultLC === answerno) {
    lowercaseDecision = false 
  };
  var resultUC = confirmUppercase();
  if (resultUC === answeryes) {
    uppercaseDecision = true
  }
  else if (resultUC === answerno) {
    uppercaseDecision = false
  };
  var resultN = confirmNumeric();
  if (resultN === answeryes) {
    numbersDecision = true
  }
  else if (resultN === answerno) {
    numbersDecision = false
  };
  var resultS = confirmSpecialCharacters();
  if (resultS === answeryes) {
    specialDecision = true
  }
  else if (resultS === answerno) {
    specialDecision = false
  };
};

function confirmLowercase() {
  var lowercase = prompt("Do you want your password to contain lowercase characters? Please answer 'yes' or 'no'.")
  lowercase.toLowerCase()
  if (lowercase === "yes") {
    return answeryes;
  }
  else if (lowercase === "no") {
    return answerno
  }
}

function confirmUppercase() {
  var uppercase = prompt("Do you want your password to contain uppercase characters? Please answer 'yes' or 'no'.")
  uppercase.toLowerCase()
  if (uppercase === "yes") {
    return answeryes
  }
  else if (uppercase === "no") {
    return answerno
  }
}

function confirmNumeric() {
  var numeric = prompt("Do you want your password to contain numeric characters? Please answer 'yes' or 'no'.")
  numeric.toLowerCase()
  if (numeric === "yes") {
    return answeryes
  }
  else if (numeric === "no") {
    return answerno
  }
}

function confirmSpecialCharacters() {
  var special = prompt("Do you want your password to contain special characters? Please answer 'yes' or 'no'.")
  special.toLowerCase()
  if (special === "yes") {
    return answeryes
  }
  else if (special === "no") {
    return answerno
  }
}

// function validateUserChoice() {

// }