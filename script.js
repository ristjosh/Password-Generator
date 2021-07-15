// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbol = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

// Write password to the #password input
function writepassword() {
  var password = generatepassword;
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

//Write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//Generate password is called and returns final password
function generatePassword(){
  var result = "";
  //User chooses amount of characters
  var length = prompt("Number Of Characters (Between 8 And 128)");
  if(isNaN(length)){
    alert("You Must Enter A Number!");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please Choose Numbers Between 8 - 128!");
    return generatePassword()
  }
  //The user chooses specifications for new password
  var Uppercase = confirm("Include Uppercase letters?");
  var Lowercase = confirm("Include Lowercase letters?");
  var Numbers = confirm("Include Numbers?");
  var Symbols = confirm("Include Symbols?");

  if(!Uppercase&&!Lowercase&&!Numbers&&!Symbols){
    alert("You Must At Least Choose 1 Character Type!");
    return generatePassword()
  }

  if(Uppercase){
    chosenCharacters += upper
  }
  if(Lowercase){
    chosenCharacters += lower
  }

  if(Numbers) {
    chosenCharacters += numbers
  }

  if(Symbols) {
    chosenCharacters += symbol
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}

//Prompting system to generate a password
 function upper(arr) {
   for (var i = 0; i < upper.length; i++) {
     arr.push(upper[i]);
   }
   return arr;
 }

 function lower(arr) {
   for (var i = 0; i < lower.length; i++) {
     arr.push(lower[i]);
   }
   return arr;
 }

 function numbers(arr) {


 function symbol(arr) {
   for (var i = 0; i < symbol.length; i++) {
     arr.push(symbol[i]);
   }
   return arr;
 }

// Adding conditions

 if (userPasswordLengthChoice === true) {
   number(workshopArr);
 }

 if (userPasswordLengthChoice === false) {
   alert = "Your Password Is Not Long Enough!";
 }

 function shuffle(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;

//   // While remaining elements shuffle
    while (0 !== currentIndex) {

//  // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

// // Swap with current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
   }

     return array;
    }
 }