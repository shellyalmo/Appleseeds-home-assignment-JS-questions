const {
  implementFilter,
  implementForEach,
  implementMap,
} = require("./implementMethods");
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
  const myfilter = (word, index, array) => typeof word === "string";
  assert.deepEqual(implementFilter(input, myfilter), input.filter(myfilter));
});

test(`implementForEach`, () => {
  const input = ["spray", "limit"];
  const callback = (word, index, array) => console.log(word, index, array);
  implementForEach(input, callback);
  input.forEach(callback);
});

test(`implementMap`, () => {
  const input = ["spray", "limit", false, "exuberant", "destruction", 5];
  const myMap = (word, index, array) => typeof word === "string";
  assert.deepEqual(implementMap(input, myMap), input.map(myMap));
});
