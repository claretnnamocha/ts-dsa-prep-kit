/**
 * Represents a node in a doubly-linked list.
 */
class LNode {
  /**
   * The value stored in this node.
   */
  private value: any;

  /**
   * The previous node in the list.
   */
  private previous: LNode | null;

  /**
   * The next node in the list.
   */
  private next: LNode | null;

  /**
   * Creates a new instance of LNode.
   *
   * @param value - The value to store in the node.
   * @param next - The next node in the list (default is null).
   * @param previous - The previous node in the list (default is null).
   */
  constructor(
    value: any,
    next: LNode | null = null,
    previous: LNode | null = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  /**
   * Gets the value stored in the node.
   *
   * @returns The value of the node.
   */
  getValue() {
    return this.value;
  }

  /**
   * Gets the previous node.
   *
   * @returns The previous LNode or null if none exists.
   */
  getPrevious() {
    return this.previous;
  }

  /**
   * Gets the next node.
   *
   * @returns The next LNode or null if none exists.
   */
  getNext() {
    return this.next;
  }

  /**
   * Sets the value of the node.
   *
   * @param value - The new value to be set.
   */
  setValue(value: any) {
    this.value = value;
  }

  /**
   * Sets the previous node.
   *
   * @param previous - The node to set as previous (or null).
   */
  setPrevious(previous: LNode | null) {
    this.previous = previous;
  }

  /**
   * Sets the next node.
   *
   * @param next - The node to set as next (or null).
   */
  setNext(next: LNode | null) {
    this.next = next;
  }
}

/**
 * A doubly-linked list implementation.
 */
export class LinkedList {
  /**
   * The head (first node) of the list.
   */
  private head: LNode | null = null;

  /**
   * The tail (last node) of the list.
   */
  private tail: LNode | null = null;

  /**
   * The number of nodes in the list.
   */
  private count: number = 0;

  /**
   * Returns the number of items in the list.
   *
   * @returns The size of the list.
   */
  size(): number {
    return this.count;
  }

  /**
   * Gets the head node of the list.
   *
   * @returns The head LNode or null if the list is empty.
   */
  getHead(): LNode | null {
    return this.head;
  }

  /**
   * Gets the tail node of the list.
   *
   * @returns The tail LNode or null if the list is empty.
   */
  getTail(): LNode | null {
    return this.tail;
  }

  /**
   * Adds an item to the end of the list.
   *
   * @param value - The value to add.
   */
  addItem(value: any) {
    if (this.isEmpty()) {
      this.head = this.tail = new LNode(value, null, null);
      this.count += 1;
      return;
    }

    const newItem = new LNode(value, null, this.tail);
    this.tail?.setNext(newItem);
    this.tail = newItem;
    this.count += 1;
  }

  /**
   * Adds an item to the beginning of the list.
   *
   * @param value - The value to add at the head.
   */
  addItemAtHead(value: any) {
    this.count += 1;
    if (this.isEmpty()) {
      this.head = this.tail = new LNode(value, null, null);
      return;
    }

    const newItem = new LNode(value, this.head, null);
    this.head?.setPrevious(newItem);
    this.head = newItem;
  }

  /**
   * Inserts an item at the specified index.
   *
   * @param index - The index at which to insert the new item.
   * @param value - The value to add.
   * @returns The newly inserted LNode.
   *
   * @throws Error if the index is not a valid integer.
   */
  addItemAtIndex(index: number, value: any): LNode {
    this.validateIndex(index);

    this.count += 1;
    let counter: number = 0;
    let current: LNode = this.head;
    let newItem: LNode;

    while (current != null) {
      if (counter === index) {
        newItem = new LNode(value, current, current.getPrevious());
        // Update previous node's next pointer if it exists
        if (current.getPrevious()) {
          current.getPrevious().setNext(newItem);
        }
        break;
      }
      counter += 1;
      current = current.getNext();
    }

    return newItem!;
  }

  /**
   * Removes the head item of the list.
   *
   * @throws Error if the list is empty.
   */
  removeHead() {
    if (this.isEmpty()) throw new Error("List is empty");

    if (this.head === this.tail) {
      return this.clear();
    }

    const newHead = this.head.getNext();
    newHead.setPrevious(null);
    this.head = newHead;
    this.count -= 1;
  }

  /**
   * Removes the tail item of the list.
   *
   * @throws Error if the list is empty.
   */
  removeTail() {
    if (this.isEmpty()) throw new Error("List is empty");

    if (this.head === this.tail) {
      return this.clear();
    }

    const newTail = this.tail.getPrevious();
    newTail.setNext(null);
    this.tail = newTail;
    this.count -= 1;
  }

  /**
   * Removes an item at the specified index.
   *
   * @param index - The index of the item to remove.
   *
   * @throws Error if the list is empty or the index is invalid.
   */
  removeItemAtIndex(index: number) {
    if (this.isEmpty()) throw new Error("List is empty");

    this.validateIndex(index);

    let counter: number = 0;
    let current: LNode = this.head;

    while (current != null) {
      if (counter === index) {
        // If not the first item, update previous node's next pointer
        if (current.getPrevious()) {
          current.getPrevious().setNext(current.getNext());
        } else {
          this.head = current.getNext();
        }

        // If not the last item, update next node's previous pointer
        if (current.getNext()) {
          current.getNext().setPrevious(current.getPrevious());
        } else {
          this.tail = current.getPrevious();
        }
        this.count -= 1;
        break;
      }

      counter += 1;
      current = current.getNext();
    }
  }

  /**
   * Clears the list.
   */
  clear() {
    this.head = this.tail = null;
    this.count = 0;
  }

  /**
   * Retrieves the node at the specified index.
   *
   * @param index - The index of the node to retrieve.
   * @returns The LNode at the given index, or null if not found.
   *
   * @throws Error if the index is not a valid integer.
   */
  getIndex(index: number): LNode | null {
    this.validateIndex(index);

    let counter: number = 0;
    let current: LNode = this.head;

    while (current != null) {
      if (counter === index) return current;
      counter += 1;
      current = current.getNext();
    }

    return null;
  }

  /**
   * Converts the list into an array of node values.
   *
   * @returns An array containing all the values in the list.
   */
  toArray() {
    let current: LNode = this.head;
    let output = [];

    while (current !== null) {
      output.push(current.getValue());
      current = current.getNext();
    }

    return output;
  }

  /**
   * Reverses the list.
   */
  reverse() {
    if (this.isEmpty()) return;

    let current: LNode = this.head;

    while (current !== null) {
      const next = current.getNext();
      const previous = current.getPrevious();

      current.setPrevious(next);
      current.setNext(previous);

      current = next;
    }

    const newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
    if (this.head) this.head.setPrevious(null);
    if (this.tail) this.tail.setNext(null);
  }

  /**
   * Replaces the node at the specified index with a new value.
   *
   * @param index - The index of the node to replace.
   * @param value - The new value to set.
   * @returns The newly created LNode.
   *
   * @throws Error if the index is not a valid integer.
   */
  setIndex(index: number, value: any): LNode {
    this.validateIndex(index);

    let counter: number = 0;
    let current: LNode = this.head;
    let newItem: LNode;

    while (current != null) {
      if (counter === index) {
        newItem = new LNode(value, current.getNext(), current.getPrevious());
        // Update previous node's next pointer if exists
        if (current.getPrevious()) {
          current.getPrevious().setNext(newItem);
        }
        break;
      }
      counter += 1;
      current = current.getNext();
    }

    return newItem!;
  }

  /**
   * Validates that the provided index is an integer.
   *
   * @param index - The index to validate.
   *
   * @throws Error if the index is not an integer.
   *
   * @private
   */
  private validateIndex(index: number) {
    if (index !== (index | 0)) {
      throw Error("`index` must be an integer");
    }
  }

  /**
   * Checks whether the list is empty.
   *
   * @returns True if the list is empty; otherwise, false.
   *
   * @private
   */
  private isEmpty(): boolean {
    return this.head == null;
  }
}

export default LinkedList;
