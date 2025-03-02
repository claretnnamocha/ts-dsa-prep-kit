/**
 * Sorts an array using the selection sort algorithm.
 *
 * @param items - The array of items to sort.
 * @param ascendingOrder - If true, sorts in ascending order; otherwise, sorts in descending order. Defaults to true.
 * @returns The sorted array.
 */
export const SelectionSort = (
  items: Array<any>,
  ascendingOrder: boolean = true
): Array<any> => {
  for (let i = 0; i < items.length - 1; i++) {
    let minOrMaxIndex = i;

    for (let j = i + 1; j < items.length; j++) {
      const shouldSwap = ascendingOrder
        ? items[j] < items[minOrMaxIndex]
        : items[j] > items[minOrMaxIndex];

      if (shouldSwap) minOrMaxIndex = j;
    }

    if (minOrMaxIndex !== i) {
      const temp = items[i];
      items[i] = items[minOrMaxIndex];
      items[minOrMaxIndex] = temp;
    }
  }

  return items;
};

export default SelectionSort;
