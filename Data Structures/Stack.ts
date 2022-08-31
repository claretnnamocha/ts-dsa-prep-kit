import LinkedList from "./LinkedList";

export class Stack {
  private list: LinkedList;

  constructor() {
    this.list = new LinkedList();
  }

  push(value: any) {
    this.list.addItemAtHead(value);
    return this.list.getHead().getValue();
  }

  pop() {
    let head = this.list.getHead();
    this.list.removeHead();
    return head.getValue();
  }

  get(index: number) {
    return this.list.getIndex(index).getValue();
  }

  size(): number {
    return this.list.size();
  }
}

export default Stack;
