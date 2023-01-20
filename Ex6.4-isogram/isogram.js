// function that determines whether a string that contains only letters is an isogram
function isIsogram(inputString) {
  const stringAsArray = inputString.toLowerCase().split("");
  const stringsAsSet = new Set(stringAsArray);
  const uniqueArray = Array.from(stringsAsSet);
  return inputString.toLowerCase() === uniqueArray.join("") ? true : false;
}

console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("Dermatoglyphics"));
