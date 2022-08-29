import assert from "assert";
import BinarySearch from "../Algorithms/BinarySearch";

describe("BinarySearch", function () {
  const range = (start: number, stop: number) => {
    let ar = [];
    for (let index = start; index <= stop; index++) {
      ar.push(index);
    }
    return ar;
  };

  it("can return true if in array", () => {
    const dataset = range(1, 1000000);
    const found = BinarySearch(dataset, 19406);
    assert.strictEqual(found, true);
  });

  it("can return false if not in array", () => {
    const dataset = range(1, 1000000);
    const found = BinarySearch(dataset, 2000000);
    assert.strictEqual(found, false);
  });
});
