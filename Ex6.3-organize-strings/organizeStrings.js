// function that takes 2 alphabetic strings and returns a sorted string, longest possible, containing distinct letters

function organizeStrings(s1, s2) {
  let allLetters = [];
  let newString = s1 + s2;
  for (let letter of newString) {
    allLetters.push(letter);
  }
  const unique = new Set(allLetters);
  return Array.from(unique).sort().join("");
}

console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
