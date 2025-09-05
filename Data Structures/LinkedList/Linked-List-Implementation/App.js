const linkedList = require("./linkedList");
const node = require("./node");
const reverse = require("./Reverse/reverse");
const MergeSorted =require("./MergeSorted/mergeSorted")


// const list = new linkedList ;
// // add a node to the end of the list
// console.log("add a node to the end of the list 5,10,20,30 \n");


//     list.add(5);
//     list.add(10);
//     list.add(20);
//     list.add(30);

// // print the list
// console.log("print the list\n");

//     list.printList(); 
// console.log("---------------------------------------------------------\n");

// // remove a node whith the specific data
// console.log("remove a node whith the specific data\n");
 
//     list.remove(10);
//     list.printList();
// console.log("---------------------------------------------------------\n");

// // check if the linked list contains a node whith the specified dataa
// console.log("check if the linked list contains a node whith the specified dataa\n");

//     list.includes(20);
//     list.includes(10);
// console.log("---------------------------------------------------------\n");

// // Insert a new node with the specified data at the specified index
// console.log("Insert a new node with the specified data at the specified index\n");

//     list.insertAt(15,7);
//     list.printList();


// console.log("---------------------------------------------------------\n");
// // Reverse the linked list 
// console.log("Reverse the linked list\n ");
// reverse(list);
// list.printList();










const list1 =new linkedList();

    list1.add(1);
    list1.add(3);
    list1.add(5);

list1.printList(); 

console.log("------------------------------------------------------");

const list2 =new linkedList();

    list2.add(2);
    list2.add(4);
    list2.add(6);

list2.printList(); 


console.log("------------------------------------------------------");


const merge = MergeSorted(list1,list2);
merge.printList();


