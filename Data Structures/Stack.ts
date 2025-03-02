import LinkedList from "./LinkedList";

/**
 * A Stack implementation using a linked list.
 */
export class Stack {
  /**
   * The underlying linked list used to store stack elements.
   */
  private list: LinkedList;

  /**
   * Creates an instance of Stack.
   */
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * Pushes a value onto the top of the stack.
   *
   * @param value - The value to push onto the stack.
   * @returns The value now at the top of the stack.
   */
  push(value: any) {
    this.list.addItemAtHead(value);
    return this.list.getHead().getValue();
  }

  /**
   * Pops the value from the top of the stack.
   *
   * @returns The value that was removed from the top of the stack, or null if the stack is empty.
   */
  pop() {
    const head = this.list.getHead();

    if (!head) return null;

    this.list.removeHead();
    return head.getValue();
  }

  /**
   * Peeks at the top value of the stack without removing it.
   *
   * @returns The value at the top of the stack.
   */
  peek() {
    return this.list.getHead().getValue();
  }

  /**
   * Returns the number of items in the stack.
   *
   * @returns The size of the stack.
   */
  size(): number {
    return this.list.size();
  }
}

export default Stack;
