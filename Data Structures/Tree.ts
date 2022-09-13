class TNode {
  private value: any;
  private leftChild: TNode | null;
  private rightChild: TNode | null;

  constructor(
    value: any,
    rightChild: TNode | null = null,
    leftChild: TNode | null = null
  ) {
    this.value = value;
    this.rightChild = rightChild;
    this.leftChild = leftChild;
  }

  getValue() {
    return this.value;
  }

  getLeftChild() {
    return this.leftChild;
  }

  getRightChild() {
    return this.rightChild;
  }

  setValue(value: any) {
    this.value = value;
  }

  setLeftChild(leftChild: TNode | null) {
    this.leftChild = leftChild;
  }

  setRightChild(rightChild: TNode | null) {
    this.rightChild = rightChild;
  }
}

export class Tree {
  private root: TNode | null;

  getRoot(): TNode | null {
    return this.root;
  }

  contains(value: any): boolean {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (value == current.getValue()) return true;

      if (value > current.getValue()) {
        current = current.getRightChild();
      } else {
        current = current.getLeftChild();
      }
    }
    return false;
  }

  insert(value: any) {
    const node = new TNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (value > current.getValue()) {
        if (!current.getRightChild()) {
          current.setRightChild(node);
          break;
        }
        current = current.getRightChild();
      } else {
        if (!current.getLeftChild()) {
          current.setLeftChild(node);
          break;
        }
        current = current.getLeftChild();
      }
    }
  }

  traversePreOrder(): Array<any> {
    let accumulator: Array<any> = [];
    this._traversePreOrder(this.root, accumulator);
    return accumulator;
  }

  private _traversePreOrder(root: TNode, accumulator: Array<any>) {
    if (!root) return;

    accumulator.push(root.getValue());

    this._traversePreOrder(root.getLeftChild(), accumulator);
    this._traversePreOrder(root.getRightChild(), accumulator);
  }

  traverseInOrder(): Array<any> {
    let accumulator: Array<any> = [];
    this._traverseInOrder(this.root, accumulator);
    return accumulator;
  }

  private _traverseInOrder(root: TNode, accumulator: Array<any>) {
    if (!root) return;

    this._traverseInOrder(root.getLeftChild(), accumulator);
    accumulator.push(root.getValue());
    this._traverseInOrder(root.getRightChild(), accumulator);
  }

  traversePostOrder(): Array<any> {
    let accumulator: Array<any> = [];
    this._traversePostOrder(this.root, accumulator);
    return accumulator;
  }

  private _traversePostOrder(root: TNode, accumulator: Array<any>) {
    if (!root) return;

    this._traversePostOrder(root.getLeftChild(), accumulator);
    this._traversePostOrder(root.getRightChild(), accumulator);
    accumulator.push(root.getValue());
  }

  height(): number {
    return this._height(this.root);
  }

  private _height(root: TNode): number {
    if (!root) return -1;

    return (
      1 +
      Math.max(
        this._height(root.getLeftChild()),
        this._height(root.getRightChild())
      )
    );
  }

  min(): number {
    return this._min(this.root);
  }

  private _min(root: TNode): number {
    if (!root) return Number.MAX_VALUE;

    if (this.isleafNode(root)) return root.getValue();

    let left = this._min(root.getLeftChild());
    let right = this._min(root.getRightChild());

    return Math.min(Math.min(left, right), root.getValue());
  }

  private isleafNode(node: TNode): boolean {
    return !node.getLeftChild() && !node.getRightChild();
  }
}

export default Tree;
