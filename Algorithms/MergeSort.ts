const merge = (sortedArray1: Array<any>, sortedArray2: Array<any>) => {
  let counter1 = 0,
    counter2 = 0;
  let result = [];

  while (counter1 < sortedArray1.length && counter2 < sortedArray2.length) {
    const element1 = sortedArray1[counter1];
    const element2 = sortedArray2[counter2];

    if (element1 < element2) {
      result.push(element1);
      counter1 += 1;
    } else {
      result.push(element2);
      counter2 += 1;
    }
  }

  return [
    ...result,
    ...sortedArray1.slice(counter1, sortedArray1.length),
    ...sortedArray2.slice(counter2, sortedArray2.length),
  ];
};

export const MergeSort = (array: Array<any>): Array<any> => {
  if (array.length === 1) return array;

  const middleIndex = (array.length / 2) | 0;

  return merge(
    MergeSort(array.slice(0, middleIndex)),
    MergeSort(array.slice(middleIndex, array.length))
  );
};
export default MergeSort;
