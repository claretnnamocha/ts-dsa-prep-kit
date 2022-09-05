import assert from "assert";
import { isValid } from "../../Algorithms/exercises/Valid Parentheses";

describe("Valid Parentheses", () => {
  it("Test with '()' [true]", () => {
    const valid = isValid("()");
    assert.strictEqual(valid, true);
  });

  it("Test with '()[]{}' [true]", () => {
    const valid = isValid("()[]{}");
    assert.strictEqual(valid, true);
  });

  it("Test with '(]' [false]", () => {
    const valid = isValid("(]");
    assert.strictEqual(valid, false);
  });

  it("Test with '((1+5)<0>)+[2a]' [true]", () => {
    const valid = isValid("((1+5)<0>)+[2a]");
    assert.strictEqual(valid, true);
  });

  it("Test with '([a+b]))' [false]", () => {
    const valid = isValid("([a+b]))");
    assert.strictEqual(valid, false);
  });

  it("Test with '[{()}]' [true]", () => {
    const valid = isValid("[{()}]");
    assert.strictEqual(valid, true);
  });
});
