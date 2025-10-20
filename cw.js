let userInput = prompt().toLowerCase();

console.log(userInput);
if (
  userInput == "a" ||
  userInput == "e" ||
  userInput == "i" ||
  userInput == "o" ||
  userInput == "u"
) {
  console.log("This is a vowel");
} else if (userInput >= "0" && userInput <= "9") {
  console.log("This is a number");
} else if (
  userInput == "@" ||
  userInput == "#" ||
  userInput == "$" ||
  userInput == "%" ||
  userInput == "^" ||
  userInput == "&" ||
  userInput == "*"
) {
  console.log("This is a special character");
} else {
  console.log("This is a consonant");
}

//correction
let char = prompt("Enter a character: ").toLowerCase();
 
if(char >= 'a' && char <= 'z'){
  if('aeiou'.includes(char)){
    console.log('This is a vowel');
    
  }else{
    console.log('This is a consonant');
  }
}else if(char >= '0' && char <= '9'){
  console.log('This is a number');
}else{
  console.log('This is a special character');
}