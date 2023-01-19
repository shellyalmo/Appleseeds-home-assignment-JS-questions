// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

//string of only letters, and spaces only for multiple words
function toWeirdCase(string) {
  const splitted = string.split(" ");
  if (
    (/[^a-zA-Z]/.test(string) && splitted !== undefined) ||
    splitted.length === 1
  ) {
    let capitalized = [];
    for (let [...word] of splitted) {
      for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
          word[i] = word[i].toUpperCase();
        }
      }
      capitalized.push(word.join(""));
    }
    return capitalized.join(" ");
  }
}
console.assert("StRiNg" == toWeirdCase("String"), toWeirdCase("String"));
console.assert(
  "WeIrD StRiNg CaSe" == toWeirdCase("Weird string case"),
  toWeirdCase("Weird string case")
);
