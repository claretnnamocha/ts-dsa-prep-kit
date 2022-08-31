import LinkedList from "./LinkedList";

export class Queue {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value: any) {
    this.list.addItemAtHead(value);
    return this.list.getHead().getValue();
  }

  dequeue() {
    let tail = this.list.getTail();
    this.list.removeTail();
    return tail.getValue();
  }

  get(index: number) {
    return this.list.getIndex(index).getValue();
  }

  size(): number {
    return this.list.size();
  }
}

export default Queue;
