const { maskify } = require("./mask");
const { test } = require("node:test");
const assert = require("node:assert");

test("maskify Skippy", (t) => {
  assert.strictEqual(maskify("Skippy"), "##ippy");
});
test("maskify 4556364607935616", (t) => {
  assert.strictEqual(maskify("4556364607935616"), "############5616");
});
