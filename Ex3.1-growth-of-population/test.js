const { growthOfPopulation } = require("./growthOfPopulation");
const test = require("node:test");
const assert = require("node:assert");

// run with node --test --watch .\shortestWords.test.js
[
  [[1500, 5, 100, 5000], 15],
  [[1500000, 2.5, 10000, 2000000], 10],
].forEach(([input, output]) => {
  test(`${input} should be ${output}`, () => {
    assert.deepEqual(growthOfPopulation(...input), output);
  });
});
