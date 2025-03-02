export const BubbleSort = (
  items: Array<any>,
  ascendingOrder: boolean = true
): Array<any> => {
  for (let iteration = 0; iteration < items.length - 1; iteration++) {
    let swapped = false;

    for (let index = 0; index < items.length - iteration - 1; index++) {
      if (
        (ascendingOrder && items[index] > items[index + 1]) ||
        (!ascendingOrder && items[index] < items[index + 1])
      ) {
        // Swap elements
        const temp = items[index];
        items[index] = items[index + 1];
        items[index + 1] = temp;
        swapped = true;
      }
    }

    // If no swaps occurred, the array is sorted
    if (!swapped) break;
  }

  return items;
};

export default BubbleSort;
