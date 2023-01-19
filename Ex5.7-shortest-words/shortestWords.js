// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

/**
 *
 * @param {string} string
 * @returns
 */
function shortestWords(string) {
  const splitted = string.split(/[\W]/); //splits string by any non alphabetic character
  let wordsLength = {};
  splitted.forEach((word) => {
    if (word.length > 0) {
      wordsLength[word] = word.length;
    }
  });

  return Math.min(...Object.values(wordsLength));
}

console.assert(
  2 === shortestWords("hi how are you?"),
  JSON.stringify(shortestWords("hi how are you?"))
);
console.assert(
  2 === shortestWords("hi my name is:"),
  JSON.stringify(shortestWords("hi my name is:"))
);
