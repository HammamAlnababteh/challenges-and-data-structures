# MinStack

## Overview
This project implements a custom `MinStack` class that extends a basic `Stack` structure. It supports common stack operations (`push`, `pop`, `peek`) along with retrieving the minimum value in constant time using an auxiliary stack.


---

## 🧪 Features

- `push(value)` – Pushes value onto the stack.
- `pop()` – Removes and returns the top node.
- `peek()` – Returns the value at the top of the stack.
- `getMin()` – Returns the minimum value in the stack in **O(1)** time.

---

## 📷 Visuals

### Whiteboard Diagram
![Whiteboard](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\StackAndQueue\StackAndQueue-Implementation\images\MinStack-WhiteBoard.png)

---

### Console Output Example
![Console Output](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\StackAndQueue\StackAndQueue-Implementation\images\MinStack-Jest-Console.png)

---

## 🧪 Testing

- Tests are written using **Jest**.
- Each class (`Node`, `Stack`, `MinStack`) has its own dedicated test suite.

To run only MinStack tests:
npx jest tests/minstack.test.js

---