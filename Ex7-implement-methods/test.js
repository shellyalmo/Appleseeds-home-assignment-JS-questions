const { implementFilter } = require("./implementMethods");
const test = require("node:test");
const assert = require("node:assert");

// run with node --test --watch .\shortestWords.test.js
test(`implementFilter`, () => {
  const input = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];
  const myfilter = (word) => word.length > 6;
  assert.deepEqual(implementFilter(input, myfilter), input.filter(myfilter));
});
test(`implementFilter1`, () => {
  const input = ["spray", "limit", false, "exuberant", "destruction", 5];
  const myfilter = (word) => typeof word === "string";
  assert.deepEqual(implementFilter(input, myfilter), input.filter(myfilter));
});
