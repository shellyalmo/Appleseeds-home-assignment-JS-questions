// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
// string for false.

function yesOrNo(bool) {
  if (typeof bool == "boolean") {
    return bool === true ? "Yes" : "No";
  } else {
    return "Please enter a boolean";
  }
}

console.log(yesOrNo(3));
console.log(yesOrNo(false));
console.log(yesOrNo(true));
console.log(yesOrNo("true"));
