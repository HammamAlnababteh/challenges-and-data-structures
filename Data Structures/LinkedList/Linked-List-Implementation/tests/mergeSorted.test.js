const linkedList = require("../linkedList");
const merge = require("../MergeSorted/mergeSorted");


describe("mergeSortedLinkedList" ,()=>{

// Test Merging when one list is empty
    test("Test Merging when one list is empty",()=>{
        const list1 = new linkedList(); // list is empty
        const list2 = new linkedList();

        list2.add(1);
        list2.add(3);
        list2.add(5);

        const result = merge(list1, list2);
        
        expect(result.head.value).toBe(1);

        expect(result.head.next.value).toBe(3);
        expect(result.head.next.next.value).toBe(5);
        expect(result.head.next.next.next).toBe(null);

    });

//Test merging when both lists are empty
    test("Test merging when both lists are empty",()=>{
        const list1 = new linkedList(); // list is empty
        const list2 = new linkedList(); // list is empty

        const result = merge(list1, list2);

        expect(result).toBe(null);


    });


//Test merging List 1 and List 2 from the second ex
    test("Test merging List 1 and List 2 ",()=>{
        const list1 = new linkedList(); 
        const list2 = new linkedList();

        list1.add(5);
        list1.add(10);
        list1.add(15);


        list2.add(2);
        list2.add(3);
        list2.add(20);

        const result = merge(list1, list2);


        expect(result.head.value).toBe(2);
        expect(result.head.next.value).toBe(3);
        expect(result.head.next.next.value).toBe(5);
        expect(result.head.next.next.next.value).toBe(10);
        expect(result.head.next.next.next.next.value).toBe(15);
        expect(result.head.next.next.next.next.next.value).toBe(20);
        expect(result.head.next.next.next.next.next.next).toBe(null);

    });
});


