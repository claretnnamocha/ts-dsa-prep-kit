/**
 * Performs a binary search on a sorted array.
 *
 * @param sortedItems - A sorted array of items.
 * @param item - The item to search for.
 * @returns True if the item is found; otherwise, false.
 */
export const BinarySearch = (sortedItems: Array<any>, item: any): boolean => {
  let left = 0;
  let right = sortedItems.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
    const midItem = sortedItems[middleIndex];

    if (midItem === item) return true;

    if (midItem > item) {
      right = middleIndex - 1; // Search left half
    } else {
      left = middleIndex + 1; // Search right half
    }
  }

  return false; // Not found
};

export default BinarySearch;
