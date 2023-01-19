// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//positive int >0
function summation(num) {
  if (typeof num === "number" && Number.isInteger(num) && num > 0) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "Input must be a positive integer.";
  }
}

console.log(summation(2));
console.log(summation(8));
console.log(summation(0));
console.log(summation(-2));
console.log(summation("2"));
