import assert from "assert";
import addTwoNumbers, {
  ListNode,
} from "../../Algorithms/exercises/Add Two Numbers";

const toListNode = (numbers: Array<number>): ListNode => {
  let node = new ListNode(numbers[0]);
  let current = node;
  for (let index = 1; index < numbers.length; index++) {
    const num = numbers[index];

    current.next = new ListNode(num);
    current = current.next;
  }

  return node;
};

const listNodeToArray = (node: ListNode): Array<number> => {
  let numbers = [];
  let current = node;

  while (current) {
    numbers.push(current.val);
    current = current.next;
  }

  return numbers;
};

describe("Length Of Longest Substring", () => {
  it("Test with Input: l1 = [2, 4, 3], l2 = [5,6,4]", () => {
    const result = addTwoNumbers(toListNode([2, 4, 3]), toListNode([5, 6, 4]));
    assert.deepStrictEqual(listNodeToArray(result), [7, 0, 8]);
  });

  it("Test with Input: l1 = [0], l2 = [0]", () => {
    const result = addTwoNumbers(toListNode([0]), toListNode([0]));
    assert.deepStrictEqual(listNodeToArray(result), [0]);
  });

  it("Test with Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", () => {
    const result = addTwoNumbers(
      toListNode([9, 9, 9, 9, 9, 9, 9]),
      toListNode([9, 9, 9, 9])
    );
    assert.deepStrictEqual(listNodeToArray(result), [8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
