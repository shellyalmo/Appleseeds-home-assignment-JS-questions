// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function longestWords(string) {
  const splitted = string.split(/[\W]/); //splits string by any non alphabetic character
  let wordsLength = {};
  splitted.forEach((word) => {
    if (word.length > 0) {
      wordsLength[word] = word.length;
    }
  });

  const longest = Math.max(...Object.values(wordsLength));
  return Object.keys(wordsLength).filter((key) => wordsLength[key] === longest);
}

// console.assert(
//   ["how", "are", "you"] === longestWords("hi how are you?"),
//   JSON.stringify(longestWords("hi how are you?"))
// );
// console.assert(
//   ["name"] === longestWords("hi my name is:"),
//   JSON.stringify(longestWords("hi my name is:"))
// );

module.exports = {
  longestWords,
};
