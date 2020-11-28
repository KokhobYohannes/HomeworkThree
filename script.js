// Assignment Code

console.log("Files are connected");

var generatePassword = alert("Welcome to Password Generator! Click ok to get started.");

var generateBtn = document.querySelector("#generate");

// Defined the four variables that will be used to generate the password

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lettersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var symbols = ["@", "!", "#", "$", "%", "<", "^", "&", "*", "<"];

var finalPassword = [];
var userPassword = "";


// Console Logged the four variables that will be used to create the password needed
console.log("lettersLowecase");
console.log("lettersUppercase");
console.log("numbers");
console.log("symbols");

var passwordLength = prompt("Enter a number between 8 and 128 for your desired password length.");
function generatePassword() {
    var passwordLength = prompt("Enter a number between 8 and 128 for your desired password length.");
    passwordLength = parseInt(passwordLength);
    console.log("passwordLength");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a number greater than 8 and less than 128.");
    }
    else {
        passwordLength === false;
    }
}

var numbers = confirm("Would you like numbers in your password?");
if (numbers === true) {
    finalPassword = finalPassword.concat(numbers);
    console.log("finalPassword");
}
else {
    numbers === false;
}

var symbols = confirm("Would you like special characters in your password?");
if (symbols === true) {
    finalPassword = finalPassword.concat(symbols);
    console.log("finalPassword");
}
else {
    symbols === false;
}

var lettersLowercase = confirm("Would you like lower case letters in your password?");
if (lettersLowercase === true) {
    finalPassword = finalPassword.concat(lettersLowercase);
    console.log("finalPassword");
}
else {
    lettersLowercase === false;
}

var lettersUppercase = confirm("Would you like upper case letters in your password?");
if (lettersUppercase === true) {
    finalPassword = finalPassword.concat(lettersUppercase);
    console.log("finalPassword");
}
else {
    lettersUppercase === false;
}
console.log("finalPassword");

var userPassword = "";
for (var i = 0; i < passwordLength; i++) {
    var rand = Math.floor(Math.random() * finalPassword.length);
    userPassword += finalPassword[rand];
    console.log(userPassword);
}

var passwordText = "";

passwordText.textContent = userPassword;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);