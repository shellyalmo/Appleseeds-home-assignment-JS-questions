// function that takes 2 alphabetic strings and returns a sorted string, longest possible, containing distinct letters

function organizeStrings(s1, s2) {
  let allLetters = [];
  for (let letter of s1) {
    allLetters.push(letter);
  }
  for (let letter of s2) {
    allLetters.push(letter);
  }
  const unique = new Set(allLetters);
  return Array.from(unique).sort().join("");
}

console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
