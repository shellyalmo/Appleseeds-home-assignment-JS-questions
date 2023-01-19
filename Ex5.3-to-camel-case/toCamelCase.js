// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(string) {
  if (string.includes("-") || string.includes("_")) {
    let capitalizedStr = "";
    const splittedArr = string.includes("-")
      ? string.split("-")
      : string.split("_");

    if (string[0] !== string.charAt(0).toUpperCase()) {
      //if first letter isn't capitalized
      capitalizedStr += splittedArr[0]; //add the first word as is
      splittedArr.shift(); //remove first word from array
    }
    for (let word of splittedArr) {
      word = word.charAt(0).toUpperCase() + word.slice(1); //capitalize only first letter
      capitalizedStr += word;
    }
    return capitalizedStr;
  } else {
    return "The input string has to be dash/underscore delimited";
  }
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The Stealth Warrior"));
