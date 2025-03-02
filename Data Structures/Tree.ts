/**
 * Represents a node in a binary tree.
 */
class TNode {
  /**
   * The value stored in the node.
   */
  private value: any;

  /**
   * The left child of the node.
   */
  private leftChild: TNode | null;

  /**
   * The right child of the node.
   */
  private rightChild: TNode | null;

  /**
   * Creates a new instance of TNode.
   *
   * @param value - The value to store in the node.
   * @param rightChild - The right child node (default is null).
   * @param leftChild - The left child node (default is null).
   */
  constructor(
    value: any,
    rightChild: TNode | null = null,
    leftChild: TNode | null = null
  ) {
    this.value = value;
    this.rightChild = rightChild;
    this.leftChild = leftChild;
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
   * Gets the left child node.
   *
   * @returns The left child TNode, or null if none exists.
   */
  getLeftChild() {
    return this.leftChild;
  }

  /**
   * Gets the right child node.
   *
   * @returns The right child TNode, or null if none exists.
   */
  getRightChild() {
    return this.rightChild;
  }

  /**
   * Sets the value of the node.
   *
   * @param value - The new value to set.
   */
  setValue(value: any) {
    this.value = value;
  }

  /**
   * Sets the left child node.
   *
   * @param leftChild - The node to set as the left child, or null.
   */
  setLeftChild(leftChild: TNode | null) {
    this.leftChild = leftChild;
  }

  /**
   * Sets the right child node.
   *
   * @param rightChild - The node to set as the right child, or null.
   */
  setRightChild(rightChild: TNode | null) {
    this.rightChild = rightChild;
  }
}

/**
 * Represents a binary search tree.
 */
export class Tree {
  /**
   * The root node of the tree.
   */
  private root: TNode | null = null;

  /**
   * Gets the root node of the tree.
   *
   * @returns The root TNode, or null if the tree is empty.
   */
  getRoot(): TNode | null {
    return this.root;
  }

  /**
   * Determines whether the tree contains a given value.
   *
   * @param value - The value to search for.
   * @returns True if the value exists in the tree; otherwise, false.
   */
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

  /**
   * Inserts a value into the tree.
   *
   * @param value - The value to insert.
   */
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

  /**
   * Traverses the tree in pre-order.
   *
   * @returns An array of values representing the pre-order traversal.
   */
  traversePreOrder(): Array<any> {
    let accumulator: Array<any> = [];
    this._traversePreOrder(this.root, accumulator);
    return accumulator;
  }

  /**
   * @private
   * Helper method to perform a pre-order traversal.
   *
   * @param root - The current node.
   * @param accumulator - The array accumulating the values.
   */
  private _traversePreOrder(root: TNode | null, accumulator: Array<any>) {
    if (!root) return;

    accumulator.push(root.getValue());
    this._traversePreOrder(root.getLeftChild(), accumulator);
    this._traversePreOrder(root.getRightChild(), accumulator);
  }

  /**
   * Traverses the tree in in-order.
   *
   * @returns An array of values representing the in-order traversal.
   */
  traverseInOrder(): Array<any> {
    let accumulator: Array<any> = [];
    this._traverseInOrder(this.root, accumulator);
    return accumulator;
  }

  /**
   * @private
   * Helper method to perform an in-order traversal.
   *
   * @param root - The current node.
   * @param accumulator - The array accumulating the values.
   */
  private _traverseInOrder(root: TNode | null, accumulator: Array<any>) {
    if (!root) return;

    this._traverseInOrder(root.getLeftChild(), accumulator);
    accumulator.push(root.getValue());
    this._traverseInOrder(root.getRightChild(), accumulator);
  }

  /**
   * Traverses the tree in post-order.
   *
   * @returns An array of values representing the post-order traversal.
   */
  traversePostOrder(): Array<any> {
    let accumulator: Array<any> = [];
    this._traversePostOrder(this.root, accumulator);
    return accumulator;
  }

  /**
   * @private
   * Helper method to perform a post-order traversal.
   *
   * @param root - The current node.
   * @param accumulator - The array accumulating the values.
   */
  private _traversePostOrder(root: TNode | null, accumulator: Array<any>) {
    if (!root) return;

    this._traversePostOrder(root.getLeftChild(), accumulator);
    this._traversePostOrder(root.getRightChild(), accumulator);
    accumulator.push(root.getValue());
  }

  /**
   * Calculates the height of the tree.
   *
   * @returns The height of the tree. Returns -1 if the tree is empty.
   */
  height(): number {
    return this._height(this.root);
  }

  /**
   * @private
   * Recursively computes the height of the tree.
   *
   * @param root - The current node.
   * @returns The height from the current node.
   */
  private _height(root: TNode | null): number {
    if (!root) return -1;

    return (
      1 +
      Math.max(
        this._height(root.getLeftChild()),
        this._height(root.getRightChild())
      )
    );
  }

  /**
   * Finds the minimum value in the tree.
   *
   * @returns The minimum value in the tree. If the tree is empty, returns Number.MAX_VALUE.
   */
  min(): number {
    return this._min(this.root);
  }

  /**
   * @private
   * Recursively finds the minimum value in the tree.
   *
   * @param root - The current node.
   * @returns The minimum value from the current node.
   */
  private _min(root: TNode | null): number {
    if (!root) return Number.MAX_VALUE;

    if (this.isleafNode(root)) return root.getValue();

    let left = this._min(root.getLeftChild());
    let right = this._min(root.getRightChild());

    return Math.min(Math.min(left, right), root.getValue());
  }

  /**
   * @private
   * Determines if a node is a leaf (has no children).
   *
   * @param node - The node to check.
   * @returns True if the node is a leaf; otherwise, false.
   */
  private isleafNode(node: TNode): boolean {
    return !node.getLeftChild() && !node.getRightChild();
  }
}

export default Tree;
