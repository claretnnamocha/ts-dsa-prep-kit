/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param sortedItems1 - The first sorted array.
 * @param sortedItems2 - The second sorted array.
 * @param ascendingOrder - If true, merge in ascending order; otherwise, merge in descending order.
 * @returns A new array containing all elements from both arrays in the specified sorted order.
 */
const merge = (
  sortedItems1: Array<any>,
  sortedItems2: Array<any>,
  ascendingOrder: boolean
): Array<any> => {
  let counter1 = 0,
    counter2 = 0;
  const result = [];

  while (counter1 < sortedItems1.length && counter2 < sortedItems2.length) {
    const element1 = sortedItems1[counter1];
    const element2 = sortedItems2[counter2];

    const condition = ascendingOrder
      ? element1 < element2
      : element1 > element2;

    if (condition) {
      result.push(element1);
      counter1++;
    } else {
      result.push(element2);
      counter2++;
    }
  }

  // Append remaining elements (if any)
  return [
    ...result,
    ...sortedItems1.slice(counter1),
    ...sortedItems2.slice(counter2),
  ];
};

/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param items - The array to sort.
 * @param ascendingOrder - If true, sorts in ascending order; otherwise, sorts in descending order. Defaults to true.
 * @returns The sorted array.
 */
export const MergeSort = (
  items: Array<any>,
  ascendingOrder: boolean = true
): Array<any> => {
  if (items.length <= 1) return items; // Handle empty array case

  const middleIndex = Math.floor(items.length / 2);

  return merge(
    MergeSort(items.slice(0, middleIndex), ascendingOrder),
    MergeSort(items.slice(middleIndex), ascendingOrder),
    ascendingOrder
  );
};

export default MergeSort;
