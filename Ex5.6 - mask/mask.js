// Usually when you buy something, you're asked whether your credit card number, phone number
// or answer to your most secret question is still correct. However, since someone could look over
// your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify( "64607935616") == "#######5616"
// maskify( "1") == "1"
// maskify( "") == ""
// // "What was the name of your first pet?"
// maskify("Skippy") == "##ippy"
// maskify("Nananananananananananananananana Batman!") ==
// "####################################man!"

function maskify(string) {
  let masked = "";
  const lastFour = string.slice(string.length - 4, string.length);
  for (let i = 1; i <= string.length - 4; i++) {
    masked += "#";
  }
  return (masked += lastFour);
}
module.exports = { maskify };
console.assert("##ippy" === maskify("Skippy"), maskify("Skippy"));
console.assert(
  "############5616" === maskify("4556364607935616"),
  maskify("4556364607935616")
);
console.assert("1" === maskify("1"), maskify("1"));
console.assert(
  "####################################man!" ===
    maskify("Nananananananananananananananana Batman!"),
  maskify("Nananananananananananananananana Batman!")
);
