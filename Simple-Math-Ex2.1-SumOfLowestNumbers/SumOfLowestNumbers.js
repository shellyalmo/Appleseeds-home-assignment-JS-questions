// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function SumLowest(arr) {
  if (
    arr.every(function (element) {
      return typeof element === "number";
    }) &&
    arr.length >= 4
  ) {
    const sortedArr = [...arr].sort((a, b) => a - b); //shallow copy for not mutating the original array
    return sortedArr[0] + sortedArr[1];
  } else {
    return "Please enter array of numbers only, and minimum length of 4.";
  }
}
console.log(SumLowest([10, 343445353, 3453445, 3453545353453]));
console.log(SumLowest([19, 5, 42, 2, 77]));
console.log(SumLowest([19, 5, 42, "2", 77]));
console.log(SumLowest([19, 1, 2, 77]));
