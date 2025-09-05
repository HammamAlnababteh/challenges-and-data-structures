// const linkedList = require("../linkedList");
// const reverse = require("../Reverse/reverse");


// describe("LinkedList",()=>{

//     // Test reverse a non-empty list
// test("Test reverse a non-empty list",()=>{
//     const list = new linkedList() ;
//     list.add(10);
//     list.add(20);
//     list.add(30);

//     reverse(list);

//     expect(list.head.value).toBe(30);
//     expect(list.head.next.value).toBe(20);
//     expect(list.head.next.next.value).toBe(10);
//     expect(list.head.next.next.next).toBe(null);

// });


// //Test reversing a single-node list(should remain unchanged)
// test("Test reversing a single-node list", ()=>{
//     const list = new linkedList();

//     list.add(10);
//     reverse(list);


//     expect(list.head.value).toBe(10);
// });


// //Test reverse an empty list
// test("Test reverse an empty list",()=>{
//     const list = new linkedList();

//     reverse(list);
//     expect(list.head).toBe(null);
// });


// //Test reversing a list with duolicate values
// test("Test reversing a list with duolicate values",()=>{
//     const list = new linkedList();
    
//     list.add(1);
//     list.add(2);
//     list.add(2);
//     list.add(3);

//     reverse(list);


//     expect(list.head.value).toBe(3);
//     expect(list.head.next.value).toBe(2);
//     expect(list.head.next.next.value).toBe(2);
//     expect(list.head.next.next.next.value).toBe(1);
//     expect(list.head.next.next.next.next).toBe(null);


// });
// });