class LNode {
  private value: any;
  private previous: LNode | null;
  private next: LNode | null;

  constructor(
    value: any,
    next: LNode | null = null,
    previous: LNode | null = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  getValue() {
    return this.value;
  }

  getPrevious() {
    return this.previous;
  }

  getNext() {
    return this.next;
  }

  setValue(value: any) {
    this.value = value;
  }

  setPrevious(previous: LNode | null) {
    this.previous = previous;
  }

  setNext(next: LNode | null) {
    this.next = next;
  }
}

export class LinkedList {
  private head: LNode | null;
  private tail: LNode | null;
  private count: number = 0;

  size(): number {
    return this.count;
  }

  getHead(): LNode | null {
    return this.head;
  }

  getTail(): LNode | null {
    return this.tail;
  }

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

  addItemAtIndex(index: number, value: any): LNode {
    this.validateIndex(index);

    this.count += 1;
    let counter: number = 0;
    let current: LNode = this.head;

    let newItem: LNode;

    while (current != null) {
      if (counter == index) {
        newItem = new LNode(value, current, current.getPrevious());
        current.getPrevious().setNext(newItem);
        break;
      }
      counter += 1;
      current = current.getNext();
    }

    return newItem;
  }

  removeHead() {
    if (this.isEmpty()) throw new Error("List is empty");

    if (this.head == this.tail) return this.clear();

    const newHead = this.head.getNext();

    newHead.setPrevious(null);
    this.head = newHead;
    this.count -= 1;
  }

  removeTail() {
    if (this.isEmpty()) throw new Error("List is empty");

    if (this.head == this.tail) return this.clear();

    const newTail = this.tail.getPrevious();

    newTail.setNext(null);
    this.tail = newTail;
    this.count -= 1;
  }

  removeItemAtIndex(index: number) {
    if (this.isEmpty()) throw new Error("List is empty");

    this.validateIndex(index);

    let counter: number = 0;
    let current: LNode = this.head;

    while (current != null) {
      if (counter == index) {
        // node is not the first item [head]
        if (current.getPrevious()) {
          current.getPrevious().setNext(current.getNext());
        } else {
          this.head = current.getNext();
        }

        // node is not the last item [tail]
        if (current.getNext()) {
          current.getNext().setPrevious(current.getPrevious());
        } else {
          this.tail = current.getPrevious();
        }
        this.count -= 1;
      }

      counter += 1;
      current = current.getNext();
    }
  }

  clear() {
    this.head = this.tail = null;
    this.count = 0;
  }

  getIndex(index: number): LNode | null {
    this.validateIndex(index);

    let counter: number = 0;
    let current: LNode = this.head;

    while (current != null) {
      if (counter == index) return current;

      counter += 1;
      current = current.getNext();
    }

    return null;
  }

  toArray() {
    let current: LNode = this.head;
    let output = [];

    while (current !== null) {
      output.push(current.getValue());
      current = current.getNext();
    }

    return output;
  }

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
    this.head.setPrevious(null);
    this.tail.setNext(null);
  }

  setIndex(index: number, value: any): LNode {
    this.validateIndex(index);

    let counter: number = 0;
    let current: LNode = this.head;

    let newItem: LNode;

    while (current != null) {
      if (counter == index) {
        newItem = new LNode(value, current.getNext(), current.getPrevious());
        current.getPrevious().setNext(newItem);
        break;
      }
      counter += 1;
      current = current.getNext();
    }

    return newItem;
  }

  private validateIndex(index: number) {
    if (index !== (index | 0)) {
      throw Error("`index` must be an integer");
    }
  }

  private isEmpty(): boolean {
    return this.head == null;
  }
}

export default LinkedList;
