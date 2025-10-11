import { TNode } from './TNode.js';
import { BinaryTree } from './BinaryTree.js';

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (value === undefined || value === null) {
            throw new Error('Invalid value');
        }
        const newNode = new TNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) {
                // ignore duplicates (اختياري: يمكنك تعديل السلوك)
                return;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    remove(value) {
        this.root = this._removeNode(this.root, value);
    }

    _removeNode(node, value) {
        if (!node) return null;
        if (value < node.value) {
            node.left = this._removeNode(node.left, value);
            return node;
        }
        if (value > node.value) {
            node.right = this._removeNode(node.right, value);
            return node;
        }
        // node.value === value -> حذف
        // حالة لا أطفال
        if (!node.left && !node.right) return null;
        // حالة طفل واحد
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        // حالة طفلين: نأخذ أصغر عنصر من الجانب الأيمن (inorder successor)
        let successor = node.right;
        while (successor.left) successor = successor.left;
        node.value = successor.value;
        node.right = this._removeNode(node.right, successor.value);
        return node;
    }

    // مريح: لعرض الترتيب inorder كنقطة تحقق
    toArrayInOrder() {
        const bt = new BinaryTree(this.root);
        return bt.inOrder();
    }
}
