// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6

function abbreviateTwoWords(string) {
  const splitted = typeof string === "string" ? string.split(" ") : 0;
  let returned = [];
  if (splitted.length === 2) {
    splitted.forEach((word) => {
      returned.push(word[0].toUpperCase());
    });
    return returned.join(".");
  } else {
    return "The input must be two words with one space";
  }
}

console.assert(
  "S.H" === abbreviateTwoWords("Sam Harris"),
  abbreviateTwoWords("Sam Harris")
);
console.assert(
  "P.F" === abbreviateTwoWords("Patrick Feeney"),
  abbreviateTwoWords("Patrick Feeney")
);
console.assert(
  "The input must be two words with one space" ===
    abbreviateTwoWords("Patrick"),
  abbreviateTwoWords("Patrick")
);
console.assert(
  "The input must be two words with one space" === abbreviateTwoWords(1),
  abbreviateTwoWords(1)
);
