const { binaryToInt } = require("./growthOfPopulation");
const test = require("node:test");
const assert = require("node:assert");

// run with node --test --watch .\shortestWords.test.js
[
  [[0, 0, 0, 1], 1],
  [[0, 0, 1, 0], 2],
  [[0, 1, 0, 1], 5],
  [[1, 0, 0, 1], 9],
  [[0, 0, 1, 0], 2],
  [[0, 1, 1, 0], 6],
  [[1, 1, 1, 1], 15],
  [[1, 0, 1, 1], 11],
  [[0, 1, 0, 1, 0, 1, 0, 1, 0], 170],
].forEach(([input, output]) => {
  test(`${input} should be ${output}`, () => {
    assert.deepEqual(binaryToInt(input), output);
  });
});
