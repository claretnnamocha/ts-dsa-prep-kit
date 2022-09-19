import assert from "assert";
import minSubArrayLen from "../../Algorithms/exercises/Minimum Size Subarray Sum";

describe("Minimum Size Subarray Sum", () => {
  it("Test with Input: target = 7, nums = [2,3,1,2,4,3]", () => {
    const result = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
    assert.deepStrictEqual(result, 2);
  });

  it("Test with Input: target = 4, nums = [1, 4, 4]", () => {
    const result = minSubArrayLen(4, [1, 4, 4]);
    assert.deepStrictEqual(result, 1);
  });

  it("Test with Input: target = 11, nums = [1,1,1,1,1,1,1,1]", () => {
    const result = minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]);
    assert.deepStrictEqual(result, 0);
  });
});
