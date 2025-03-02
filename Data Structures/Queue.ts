import LinkedList from "./LinkedList";

/**
 * A Queue implementation using a doubly-linked list.
 */
export class Queue {
  /**
   * The underlying linked list that stores the queue items.
   */
  private list: LinkedList;

  /**
   * Creates an instance of Queue.
   */
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * Adds an item to the front of the queue.
   *
   * @param value - The value to enqueue.
   * @returns The value of the new head of the queue.
   */
  enqueue(value: any) {
    this.list.addItemAtHead(value);
    return this.list.getHead().getValue();
  }

  /**
   * Removes and returns the item from the end of the queue.
   *
   * @returns The value of the dequeued item.
   */
  dequeue() {
    const tail = this.list.getTail();
    this.list.removeTail();
    return tail.getValue();
  }

  /**
   * Retrieves the value at the specified index in the queue.
   *
   * @param index - The index of the item to retrieve.
   * @returns The value at the given index.
   */
  get(index: number) {
    return this.list.getIndex(index).getValue();
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns The size of the queue.
   */
  size(): number {
    return this.list.size();
  }
}

export default Queue;
