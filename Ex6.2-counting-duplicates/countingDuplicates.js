// write a function that returns the count of distinct case sensitive alphabetic characters and numeric digits that occur more than once in the input string.

function countDuplicates(inputString) {
  let charsObj = {};
  for (let letter of inputString) {
    if (charsObj[letter] === undefined) {
      //does not exist in obj
      charsObj[letter] = 1;
    } else if (charsObj[letter] !== undefined) {
      //does exist
      charsObj[letter] += 1;
    }
  }
  let counter = 0;
  let occurrences = Object.values(charsObj);
  occurrences.forEach((element) => {
    if (element > 1) {
      counter++;
    }
  });
  return counter;
}
// console.assert(2, countDuplicates("ABBA"), countDuplicates("ABBA"));
// console.assert(0, countDuplicates("abcde"),

console.log(countDuplicates("abcde"));
// console.assert(2, countDuplicates("aA11"), countDuplicates("aA11"));
