// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr(count, string) {
  if (typeof count === "number" && typeof string === "string") {
    let repeatedString = "";
    for (let i = 1; i <= count; i++) {
      repeatedString += string;
    }
    return repeatedString;
  } else {
    return "First argument should be a number and second is a string";
  }
}
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));
console.log(repeatStr(1, "Hello"));

console.log(repeatStr("Hello", 5));
