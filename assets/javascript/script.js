// Assignment Code
let generateBtn = document.querySelector("#generate");

// Inputs correspond with array (inputlc = arraylc, inputUC = arrayUC, inputnum = arraynum, inputspec = arrayspec)
let arraylc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
let arrayUC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
let arraynum = ['1','2','3','4','5','6','7','8','9','0']
let arrayspec = ['~','!','@','#','$','%','^','&','*','(',')','+','=']; 

//completed password array that will be transmitted

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  let characters= [];
  let passwordfinal = [];

  //user selected options defined
  let length = prompt('How many characters do you want your password to be? (Choose between 8-128)');
  let inputlc = confirm ('Do you want lowercase letters in your password?');
  let inputUC = confirm ('Do you want UPPERCASE letters in your password?');
  let inputnum = confirm ('Do you want numbers in your password?');
  let inputspec = confirm ('Do you want special characters in your password?');

  // if statements checks confirms to be true and adds characters accordingly
  if(inputlc) {
    characters = characters.concat(arraylc);
    
  } if (inputUC) {
    characters = characters.concat(arrayUC);
    
  } if (inputnum) {
    characters = characters.concat(arraynum);
    
  }if (inputspec) {
    characters = characters.concat(arrayspec);
  };
  // for statement allows for randomization math formula
    for (let i = 0; i < length; i++){
      passwordfinal.push(characters[Math.floor(Math.random() * characters.length)]);
    
    };
// sends password to generatePassword
let value = passwordfinal.join('')
return value;

 };



