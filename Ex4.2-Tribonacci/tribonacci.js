const assert = require("node:assert");

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  let result = [];
  result.push(...signature);
  while (result[result.length - 1] !== n) {
    result.push(
      result[result.length - 1] +
        result[result.length - 2] +
        result[result.length - 3]
    );
  }
  return result;
}

assert.deepStrictEqual([1, 1, 1, 3, 5, 9, 17, 31], tribonacci([1, 1, 1], 31));

assert.deepStrictEqual(
  [0, 0, 1, 1, 2, 4, 7, 13, 24],
  tribonacci([0, 0, 1], 24)
);
