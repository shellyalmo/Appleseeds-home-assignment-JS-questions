const { longestWords } = require("./shortestWordsV2.js");
const test = require("node:test");
const assert = require("node:assert");

// run with node --test --watch .\shortestWords.test.js

test("hi how are you?", () => {
  assert.deepEqual(longestWords("hi how are you?"), ["how", "are", "you"]);
});

test("name", () => {
  assert.deepEqual(["name"], longestWords("hi my name is:"));
});

test("weather the weather is wet", () => {
  assert.deepEqual(["weaxxxther"], longestWords("weather the weather is wet"));
});
