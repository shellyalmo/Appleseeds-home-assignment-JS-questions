const { peopleOnBus } = require("./peopleOnBus");
const test = require("node:test");
const assert = require("node:assert");

// run with node --test --watch .\shortestWords.test.js
[
  [
    [
      [10, 0],
      [3, 5],
      [5, 8],
    ],
    5,
  ],
  [
    [
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ],
    17,
  ],
  [
    [
      [3, 0],
      [9, 1],
      [4, 8],
      [12, 2],
      [6, 1],
      [7, 8],
    ],
    21,
  ],
  [[[0, 0]], 0],
].forEach(([input, output]) => {
  test(`${input} should be ${output}`, () => {
    assert.deepEqual(peopleOnBus(input), output);
  });
});
