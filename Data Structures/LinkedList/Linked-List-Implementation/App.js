const linkedList = require("./linkedList");
const node = require("./node");


const list = new linkedList ;
// add a node to the end of the list
console.log("add a node to the end of the list 5,10,20,30");


    list.add(5);
    list.add(10);
    list.add(20);
    list.add(30);

// print the list
console.log("print the list");

    list.printList(); 
console.log("---------------------------------------------------------")

// remove a node whith the specific data
console.log("remove a node whith the specific data");
 
    list.remove(10);
    list.printList();
console.log("---------------------------------------------------------")

// check if the linked list contains a node whith the specified dataa
console.log("check if the linked list contains a node whith the specified dataa");

    list.includes(20);
    list.includes(10);
console.log("---------------------------------------------------------")

// Insert a new node with the specified data at the specified index
console.log("Insert a new node with the specified data at the specified index");

    list.insertAt(15,7);
    list.printList();



