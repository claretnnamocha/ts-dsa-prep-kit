import assert from "assert";
import lengthOfLongestSubstring from "../../Algorithms/exercises/Length Of Longest Substring";

describe("Length Of Longest Substring", () => {
  it("Test with 'abrkaabcdefghijjxxx'", () => {
    const length = lengthOfLongestSubstring("abrkaabcdefghijjxxx");
    assert.strictEqual(length, 10);
  });

  it("Test with 'abcabcbb'", () => {
    const length = lengthOfLongestSubstring("abcabcbb");
    assert.strictEqual(length, 3);
  });

  it("Test with 'bbbbb'", () => {
    const length = lengthOfLongestSubstring("bbbbb");
    assert.strictEqual(length, 1);
  });

  it("Test with 'pwwkew'", () => {
    const length = lengthOfLongestSubstring("pwwkew");
    assert.strictEqual(length, 3);
  });

  it("Test with ' '", () => {
    const length = lengthOfLongestSubstring(" ");
    assert.strictEqual(length, 1);
  });

  it("Test with 'abc'", () => {
    const length = lengthOfLongestSubstring("abc");
    assert.strictEqual(length, 3);
  });

  it("Test with 'dvdf'", () => {
    const length = lengthOfLongestSubstring("dvdf");
    assert.strictEqual(length, 3);
  });
});
