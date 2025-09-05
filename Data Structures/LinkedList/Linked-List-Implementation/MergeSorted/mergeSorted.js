const linkedList = require("../linkedList");
const list = require("../linkedList");
const node = require("../node")



function MergeSorted(list1 , list2) {
    
    if (!list1) return list2;
    if (!list2) return list1;


    let dummy = new node(0);
    let tail =dummy ;

    let curr1 =list1.head ;
    let curr2 =list2.head ;


    
    if (!curr1 && !curr2) {
        console.log("Both of lists is empty");
        return null;
    }
    
    while (curr1 && curr2) {
        if (curr1.value <curr2.value) {
            tail.next = curr1 ;
            curr1 = curr1.next ;
        }else{
            tail.next = curr2 ;
            curr2 = curr2.next ;
        }
        tail =tail.next ;
    }

    if(curr1) tail.next = curr1 ;
    if(curr2) tail.next = curr2 ;


    const mergelist = new linkedList();
    mergelist.head = dummy.next ;
    return mergelist ;

}



module.exports =  MergeSorted;