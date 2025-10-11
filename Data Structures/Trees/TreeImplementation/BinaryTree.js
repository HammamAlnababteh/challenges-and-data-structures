import { TNode } from './TNode.js';

export class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        };
        try {
            traverse(this.root);
        } catch (err) {
            console.error('PreOrder traversal error:', err);
        }
        return result;
    }

    inOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };
        try {
            traverse(this.root);
        } catch (err) {
            console.error('InOrder traversal error:', err);
        }
        return result;
    }

    postOrder() {
        const result = [];
        const traverse = (node) => {
            if (!node) return;
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        };
        try {
            traverse(this.root);
        } catch (err) {
            console.error('PostOrder traversal error:', err);
        }
        return result;
    }

    // Simple structured print (ASCII)
    print() {
        if (!this.root) {
            console.log('Tree is empty');
            return;
        }

        const printNode = (node, prefix = '', isLeft = true) => {
            if (!node) return;
            console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.value);
            if (node.left) printNode(node.left, prefix + (isLeft ? '    ' : '│   '), false);
            if (node.right) printNode(node.right, prefix + (isLeft ? '    ' : '│   '), true);
        };

        printNode(this.root, '', true);
    }
}
