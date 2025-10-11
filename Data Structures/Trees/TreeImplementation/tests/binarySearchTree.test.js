import { BinarySearchTree } from '../BinarySearchTree.js';

test('add and contains', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(7);
    expect(bst.contains(7)).toBe(true);
});

test('remove node', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 7].forEach(n => bst.add(n));
    expect(bst.contains(5)).toBe(true);
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
});

test('adding duplicates should not break tree', () => {
    const bst = new BinarySearchTree();
    bst.add(10);
    bst.add(10); // duplicate ignored by implementation
    expect(bst.contains(10)).toBe(true);
});
