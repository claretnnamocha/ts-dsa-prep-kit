import assert from "assert";
import LinkedList from "../Data Structures/LinkedList";
import Queue from "../Data Structures/Queue";
import Stack from "../Data Structures/Stack";

describe("Data structures", () => {
  describe("LinkedList", function () {
    const list: LinkedList = new LinkedList();
    beforeEach(() => {
      list.clear();
    });

    it("can add item", function () {
      list.addItem(5);
      assert.strictEqual(list.getHead().getValue(), 5);
      assert.strictEqual(list.getTail().getValue(), 5);
    });

    it("can add item at head", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      list.addItemAtHead(15);
      assert.strictEqual(list.getHead().getValue(), 15);
    });

    it("can get index", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      assert.strictEqual(list.getIndex(1).getValue(), 20);
    });

    it("can return null if index does not exist", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      assert.strictEqual(list.getIndex(100), null);
    });

    it("can change value of node at specific index", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      list.setIndex(1, 15);
      assert.strictEqual(list.getIndex(1).getValue(), 15);
      assert.strictEqual(list.getIndex(2).getValue(), 30);
    });

    it("can add item at index", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      list.addItemAtIndex(1, 15);
      assert.strictEqual(list.getIndex(1).getValue(), 15);
      assert.strictEqual(list.getIndex(2).getValue(), 20);
      assert.strictEqual(list.size(), 6);
    });

    it("can remove head", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      list.removeHead();
      assert.strictEqual(list.getHead().getValue(), 20);
      assert.strictEqual(list.size(), 4);
    });

    it("can remove item at specific index", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.addItem(50);
      list.addItem(60);
      list.addItem(70);

      assert.strictEqual(list.size(), 7);

      list.removeItemAtIndex(2);
      list.removeItemAtIndex(2);

      assert.strictEqual(list.size(), 5);

      list.addItem(80);
      list.addItem(90);

      assert.strictEqual(list.size(), 7);

      list.removeItemAtIndex(0);
      list.removeItemAtIndex(5);

      assert.strictEqual(list.size(), 5);

      assert.strictEqual(list.getHead().getValue(), 20);

      assert.strictEqual(list.getTail().getValue(), 80);

      list.removeItemAtIndex(0);
      list.removeItemAtIndex(1);
      list.removeItemAtIndex(2);
      list.removeItemAtIndex(1);
      list.removeItemAtIndex(0);

      assert.strictEqual(list.size(), 0);
    });

    it("can remove tail", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.removeTail();
      assert.strictEqual(list.getTail().getValue(), 30);
    });

    it("can clear list", function () {
      list.addItem(10);
      list.addItem(20);
      list.addItem(30);
      list.addItem(40);
      list.clear();
      assert.strictEqual(list.getHead(), null);
      assert.strictEqual(list.getTail(), null);
      assert.strictEqual(list.size(), 0);
    });
  });

  describe("Queue", function () {
    let queue: Queue = new Queue();
    beforeEach(() => {
      queue = new Queue();
    });

    it("can add item", function () {
      queue.enqueue(10);
      assert.strictEqual(queue.enqueue(10), 10);
    });

    it("can remove item", function () {
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);
      assert.strictEqual(queue.dequeue(), 10);
    });

    it("can get index", function () {
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);
      assert.strictEqual(queue.get(1), 20);
    });

    it("can check size", function () {
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);
      queue.enqueue(40);
      assert.strictEqual(queue.size(), 4);
    });
  });

  describe("Stack", function () {
    let stack: Stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("can add item", function () {
      assert.strictEqual(stack.push(10), 10);
    });

    it("can remove item", function () {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      assert.strictEqual(stack.pop(), 30);
    });

    it("can get index", function () {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      assert.strictEqual(stack.get(1), 20);
    });

    it("can check size", function () {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      stack.push(40);
      assert.strictEqual(stack.size(), 4);
    });
  });
});
