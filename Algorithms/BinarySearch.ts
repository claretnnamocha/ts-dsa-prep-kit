export const BinarySearch = (sortedArray: Array<any>, item: any) => {
  do {
    if (sortedArray.length == 1) return sortedArray[0] == item;

    const middleIndex = (sortedArray.length / 2) | 0;

    const midItem = sortedArray[middleIndex];

    if (midItem == item) return true;

    sortedArray =
      midItem > item
        ? sortedArray.slice(0, middleIndex)
        : sortedArray.slice(middleIndex, sortedArray.length);
  } while (true);
};

export default BinarySearch;
