# #Binary Tree & BST

This repository contains implementations of **Binary Tree** and **Binary Search Tree (BST)** in JavaScript. Each class has methods for adding, removing, traversing, and manipulating nodes.  

---

## 1. Binary Tree (Level-order add)

### Description
A standard binary tree where nodes are inserted **level by level**, left to right.  

### Methods
- **add(value)**: Inserts a new node at the next available position (level-order).  
- **PreOrder()**: Returns an array of node values in Root → Left → Right order.  
- **InOrder()**: Returns an array of node values in Left → Root → Right order.  
- **PostOrder()**: Returns an array of node values in Left → Right → Root order.  
- **print()**: prints all three traversal arrays to console.  

### Whiteboard Image
![Binary Tree Whiteboard](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\Trees\TreeImplementation\image\BinaryTreeWhiteBoard.png)

---

## 2. Binary Search Tree (BST)

### Description
A Binary Search Tree (BST) where each node satisfies: `left < parent < right`.  
Includes recursive add, iterative contains, and remove methods handling all edge cases.  

### Methods
- **add(value)**: Recursively adds a value in BST order.  
- **Contains(value)**: Checks if a value exists in the tree (iterative).  
- **Remove(value)**: Removes a node, maintaining BST structure (handles leaf, one child, two children, root).  

### Whiteboard Image
![BST Whiteboard](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\Trees\TreeImplementation\image\BSTWhiteBoard.png)

---

## 3. Tests

Test your trees by adding, removing, and traversing nodes. Example:
![consoleAndJestOutput](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\Trees\TreeImplementation\image\consoleAndJestOutput.png)
