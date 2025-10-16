const BinaryTree = require('../BinaryTree');
const SecondMax = require('../SecondMaxValue/SecondMax');
test('Second largest in simple BinaryTree', () => {
    const tree = new BinaryTree(10);
    tree.add(5);
    tree.add(20);
    tree.add(15);

    expect(SecondMax(tree.root)).toBe(15); // أكبر = 20, ثاني أكبر = 15
});
test('Second largest distinct with duplicates', () => {
    const tree = new BinaryTree(10);
    tree.add(20);
    tree.add(20);
    tree.add(15);
    tree.add(15);
    tree.add(5);

    expect(SecondMax(tree.root)).toBe(15); // أكبر = 20, ثاني أكبر distinct = 15
});
test('Second largest with single node', () => {
    const tree = new BinaryTree(10);

    expect(SecondMax(tree.root)).toBe(-Infinity);
});
test('Second largest in empty tree', () => {
    const tree = new BinaryTree(); // بدون قيمة
    tree.root = null; // نتأكد انها فارغة

    expect(SecondMax(tree.root)).toBe(-Infinity);
});
test('Second largest when all values are the same', () => {
    const tree = new BinaryTree(10);
    tree.add(10);
    tree.add(10);

    expect(SecondMax(tree.root)).toBe(-Infinity);
});
test('Second largest when largest is duplicated', () => {
    const tree = new BinaryTree(20);
    tree.add(20);
    tree.add(15);
    tree.add(15);
    tree.add(10);

    expect(SecondMax(tree.root)).toBe(15); // أكبر = 20, ثاني أكبر distinct = 15
});
test('Second largest is left child of largest', () => {
    const tree = new BinaryTree(50);
    tree.add(30);
    tree.add(70);
    tree.add(60);

    expect(SecondMax(tree.root)).toBe(60); // أكبر = 70, ثاني أكبر = 60
});
test('Second largest in complex tree with multiple duplicates', () => {
    const tree = new BinaryTree(10);
    tree.add(20);
    tree.add(30);
    tree.add(30);
    tree.add(15);
    tree.add(25);
    tree.add(25);
    tree.add(5);

    expect(SecondMax(tree.root)).toBe(25); // أكبر = 30, ثاني أكبر distinct = 25
});
