// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

function removeFirstLast(string) {
  return typeof string === "string"
    ? string.slice(1, string.length - 1)
    : "Input must be a string";
}

console.log(removeFirstLast("my name is bla"));
console.log(removeFirstLast("foobar"));
console.log(removeFirstLast(12));
