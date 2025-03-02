const merge = (
  sortedItems1: Array<any>,
  sortedItems2: Array<any>,
  ascendingOrder: boolean
) => {
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
