import { TNode } from '../TNode.js';
import { BinaryTree } from '../BinaryTree.js';

test('pre-order traversal', () => {
    const root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);
    const bt = new BinaryTree(root);
    expect(bt.preOrder()).toEqual([1, 2, 4, 3]);
});

test('in-order traversal', () => {
    const root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);
    const bt = new BinaryTree(root);
    expect(bt.inOrder()).toEqual([4, 2, 1, 3]);
});

test('post-order traversal', () => {
    const root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);
    const bt = new BinaryTree(root);
    expect(bt.postOrder()).toEqual([4, 2, 3, 1]);
});
