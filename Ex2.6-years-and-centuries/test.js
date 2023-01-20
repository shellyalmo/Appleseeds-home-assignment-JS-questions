const { centuryFromYear } = require("./yearsAndCenturies");
const test = require("node:test");
const assert = require("node:assert");

// run with node --test --watch .\shortestWords.test.js
[
  [1705, 18],
  [1900, 19],
  [1601, 17],
  [2000, 20],
].forEach(([input, output]) => {
  test(`${input} should be ${output}`, () => {
    assert.deepEqual(centuryFromYear(input), output);
  });
});
