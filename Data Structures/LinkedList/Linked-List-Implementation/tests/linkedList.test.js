const linkedList = require("../linkedList");

describe("LinkedList",()=>{

// Add node in the end test
  test("Add node in the end ",()=>{
    const list =new linkedList();
    list.add(10);
    list.add(20);
    list.add(30);

    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(20);
    expect(list.head.next.next.value).toBe(30);

  });

// Remove test
  test("Remove a node by value ",()=>{
    const list = new linkedList();
    list.add(10);
    list.add(20);
    list.add(30);

    list.remove(20);

    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(30);
    expect(list.includes(20)).toBe(false);

  });

// test check if a node with the specified data exists in the linked list
  test(" if Includes value ",()=>{
    
    const list = new linkedList();
    list.add(10);
    list.add(20);
    list.add(30);
    
    expect(list.includes(10)).toBe(true);
    expect(list.includes(20)).toBe(true);
    expect(list.includes(120)).toBe(false);

  });
  
  // test insert a node at the specified index in the linked list
  test("Insert node by index",()=>{
    const list = new linkedList();

    list.add(10);
    list.add(20);
    list.add(30);

    list.insertAt(40,1);

    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(40);

  })
});