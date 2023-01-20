function mumbling(inputString) {
  let lettersArray = [];
  let repeat = 1;
  for (let i = 0; i < inputString.length; i++) {
    lettersArray.push(inputString[i].repeat(repeat));
    repeat++;
  }

  const capitalizedArray = lettersArray.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedArray.join("-");
}

console.log(mumbling("abcd"));
