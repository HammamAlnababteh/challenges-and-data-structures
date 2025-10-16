const BinaryTree = require('./BinaryTree.js');
const BST = require('./BinarySearchTree.js');
const SecondMax = require('./SecondMaxValue/BinaryTreeSecondMax.js');


console.log("=== Binary Tree Example ===");

const bt = new BinaryTree(1);
bt.add(2);
bt.add(3);
bt.add(4);
bt.add(5);

bt.print(); // PreOrder, InOrder, PostOrder

console.log("\n=== BST Example ===");

const bst = new BST(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(20);

console.log("Contains 7:", bst.contains(7)); // true
console.log("Contains 8:", bst.contains(8)); // false

console.log("Before Remove 15:");
console.log("PreOrder:", bst.add(15));

bst.remove(15);

console.log("After Remove 15:");
function printBSTPreOrder(node, result = []) {
    if (!node) return result;
    result.push(node.value);
    printBSTPreOrder(node.left, result);
    printBSTPreOrder(node.right, result);
    return result;
}

console.log("PreOrder:", printBSTPreOrder(bst.root));


const bt1 = new BinaryTree(1);
bt1.add(20);
bt1.add(30);
bt1.add(4);
bt1.add(5);
bt1.add(30);
bt1.add(20);
bt1.add(20);
bt1.add(30);
bt1.print();
const btSecond = SecondMax(bt1.root);
console.log("Second largest in BinaryTree:", btSecond);