# Stack with Delete Middle Operation

This project extends a basic `Stack` class by adding a method to **delete the middle element** from the stack. The middle is defined as:

- `length / 2 - 1` when the number of elements is even.
- `Math.floor(length / 2)` when the number of elements is odd.


## 🧠 Logic Behind `deleteMiddle()`

1. Count total elements in the stack.
2. Determine the index of the middle element.
3. Pop elements one by one and skip pushing the middle element into a temporary stack.
4. Push elements back from the temporary stack to the original stack (to preserve order).

## 📸 Visual Explanation

### Stack Before `deleteMiddle()`

<!-- Replace with your Whiteboard drawing link -->
![Whiteboard Explanation](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\StackAndQueue\StackAndQueue-Implementation\images\deleteMiddleElement-whiteboard.png)

### Stack After `deleteMiddle()`

<!-- Replace with your Gist visualization link -->
![Gist Visualization](C:\Users\Student\Desktop\callenges-data\challenges-and-data-structures\Data Structures\StackAndQueue\StackAndQueue-Implementation\images\deleteMiddleElement-jest.png)

## 🧪 Example

If the stack contains:

Top → 5 → 4 → 3 → 2 → 1

After calling `.deleteMiddle()`, the stack will become:

Top → 5 → 4 → 2 → 1 (3 was removed)

## ✅ Edge Cases Handled

- If the stack is empty → nothing happens.
- If the stack has only 1 element → it becomes empty.

---