import { TNode } from './TNode.js';
import { BinaryTree } from './BinaryTree.js';
import { BinarySearchTree } from './BinarySearchTree.js';

function demoBinaryTree() {
    const root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);

    const bt = new BinaryTree(root);
    console.log('--- Binary Tree Traversals ---');
    console.log('PreOrder:', bt.preOrder());
    console.log('InOrder: ', bt.inOrder());
    console.log('PostOrder:', bt.postOrder());
    console.log('Structured print:');
    bt.print();
}

function demoBST() {
    const bst = new BinarySearchTree();
    [10, 5, 15, 7].forEach(n => bst.add(n));

    console.log('\n--- Binary Search Tree Demo ---');
    console.log('Contains 7? ', bst.contains(7)); // true
    bst.remove(5);
    console.log('After remove(5) -> Contains 5? ', bst.contains(5)); // false
    console.log('BST inorder as array:', bst.toArrayInOrder());
}

try {
    demoBinaryTree();
    demoBST();
} catch (err) {
    console.error('Demo error:', err);
}
