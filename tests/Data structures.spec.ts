import assert from "assert";
import LinkedList from "../Data Structures/LinkedList";

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
