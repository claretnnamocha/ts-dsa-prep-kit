import assert from "assert";
import BinarySearch from "../Algorithms/BinarySearch";
import MergeSort from "../Algorithms/MergeSort";

describe("BinarySearch", function () {
  const dataset = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  ];

  it("can return true if in array", () => {
    const found = BinarySearch(dataset, 48);
    assert.strictEqual(found, true);
  });

  it("can return false if not in array", () => {
    const found = BinarySearch(dataset, 80);
    assert.strictEqual(found, false);
  });
});

describe("Sorting Algorithms", () => {
  const dataset = [1, 3, 5, 10, 11, 12, 2, 4, 6, 7, 8, 9];
  const sortedDataset1ASC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const sortedDataset1DESC = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const dataset2 = [
    1, 3, 5, 10, 11, 8, 5, 12, 2, 4, 6, 7, 6, 8, 9, 0, 7, 3, 6, 1,
  ];
  const sortedDataset2ASC = [
    0, 1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 10, 11, 12,
  ];
  const sortedDataset2DESC = [
    12, 11, 10, 9, 8, 8, 7, 7, 6, 6, 6, 5, 5, 4, 3, 3, 2, 1, 1, 0,
  ];

  describe("MergeSort", function () {
    it("can sort an unsorted array", () => {
      const sorted = MergeSort(dataset);
      assert.deepStrictEqual(sorted, sortedDataset1ASC);
    });

    it("can sort an unsorted array in descending order", () => {
      const sorted = MergeSort(dataset, false);
      assert.deepStrictEqual(sorted, sortedDataset1DESC);
    });

    it("can sort an unsorted array with duplicates", () => {
      const sorted = MergeSort(dataset2);
      assert.deepStrictEqual(sorted, sortedDataset2ASC);
    });

    it("can sort an unsorted array with duplicates in descending order", () => {
      const sorted = MergeSort(dataset2, false);
      assert.deepStrictEqual(sorted, sortedDataset2DESC);
    });
  });
});
