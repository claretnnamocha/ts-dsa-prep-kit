const moveToLeft = (array: Array<any>, i: number) => {
  const temp = array[i];
  array[i] = array[i - 1];
  array[i - 1] = temp;
};

export const SelectionSort = (
  array: Array<any>,
  ascendingOrder: boolean = true
): Array<any> => {
  for (let iteration = 0; iteration < array.length; iteration++) {
    for (let index = 0; index < array.length - iteration; index++) {
      const element = array[index];
      const nextElement = array[index + 1];

      const condition = ascendingOrder
        ? nextElement < element
        : nextElement > element;

      if (condition) moveToLeft(array, index + 1);
    }
  }

  return array;
};

export default SelectionSort;
