// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  if (issuePrompts()) {
    "then it generates a password"
  }
}

function issuePrompts() {
  characterLength();
  characterType();
  validateUserChoice();
}

function characterLength() {
  var passwordLength = prompt("How many characters do you want your password to be comprised of?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength
  }
  else {
    return "Passwords must be at least 8 characters in length."
  }
}

function characterType() {
  confirmLowercase();
  confirmUppercase();
  confirmNumeric();
  confirmSpecialCharacters();
}

function confirmLowercase() {
  var lowercase = prompt("Do you want your password to contain lowercase characters? Please answer 'yes' or 'no'.")
  if (lowercase === "yes" || lowercase === "YES" || lowercase === "Yes") {
    return lowercase
  }
  else {
    return
  }
}

function confirmUppercase() {
  var uppercase = prompt("Do you want your password to contain uppercase characters? Please answer 'yes' or 'no'.")
  if (uppercase === "yes" || lowercase === "YES" || lowercase === "Yes") {
    return uppercase
  }
  else {
    return
  }
}

function confirmNumeric() {
  var numeric = prompt("Do you want your password to contain numeric characters? Please answer 'yes' or 'no'.")
  if (numeric === "yes" || lowercase === "YES" || lowercase === "Yes") {
    return numeric
  }
  else {
    return
  }
}

function confirmSpecialCharacters() {
  var special = prompt("Do you want your password to contain special characters? Please answer 'yes' or 'no'.")
  if (special === "yes" || lowercase === "YES" || lowercase === "Yes") {
    return special
  }
  else {
    return
  }
}

function validateUserChoice() {
  
}