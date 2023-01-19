// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

function basicMath(operation, value1, value2) {
  const allowedOperations = "+-*/";
  if (
    typeof value1 === "number" &&
    typeof value2 === "number" &&
    typeof operation === "string" &&
    allowedOperations.includes(operation)
  ) {
    switch (operation) {
      case "+":
        return value1 + value2;
        break;
      case "-":
        return value1 - value2;
        break;
      case "*":
        return value1 * value2;
        break;
      case "/":
        return value1 / value2;
        break;
    }
  } else {
    return "Input should be numbers for values and string (+, - , * , /) for operation";
  }
}

console.log(basicMath("+", 4, 7));
console.log(basicMath("-", 15, 18));
console.log(basicMath("*", 5, 5));
console.log(basicMath("/", 49, 7));
console.log(basicMath("!", [49], "8"));
