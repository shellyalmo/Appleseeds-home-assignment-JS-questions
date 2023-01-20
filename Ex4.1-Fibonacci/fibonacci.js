const assert = require("node:assert");

function fibonacci(signature, n) {
  let result = [];
  result.push(...signature);
  while (result[result.length - 1] !== n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

assert.deepStrictEqual(
  [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
  fibonacci([1, 1], 144)
);

assert.deepStrictEqual(
  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
  fibonacci([0, 1], 144)
);
