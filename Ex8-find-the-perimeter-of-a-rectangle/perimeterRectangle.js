const assert = require("node:assert");

function perimeterRectangle(length, width) {
  return length * 2 + width * 2;
}

assert.deepStrictEqual(22, perimeterRectangle(2, 9));
assert.deepStrictEqual(60, perimeterRectangle(20, 10));
