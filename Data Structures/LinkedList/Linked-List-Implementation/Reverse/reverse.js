const list = require("../linkedList");


function reverse(list) {
    if(!list.head){
    console.log("Linked list is empty !!!");
        return null;
    }
    let curr = list.head ;
    let prev = null ; 
    if(!curr.next){
        return ;
    }
      while (curr) {
        let next = curr.next ;
        curr.next = prev ;
        prev = curr ; 
        curr = next ;
    }
    list.head = prev ;

}


module.exports = reverse ;
