const node = require("./node");

class linkedList {
    constructor() {
        this.head = null ;
    }

    add(data){
        const newnode = new node(data);
        
        if(!this.head){
            this.head = newnode ;
            return ;
        }

        let current = this.head ;
        while(current.next){
            current = current.next ;
        }
        current.next = newnode ;
    }


    printList(){
        let list = [];
        let current =this.head;

        while (current) {
            list.push(current.value)
            current = current.next ;
        }

        if(list.length === 0){
            console.log("The linked list is empty");
            return ;
            
        }

        console.log("Head-->"+list.join("-->")+"-->Null");
        
        
    }


    remove(data){

        if(!this.head){
            console.log("can't remove "+data +" because the linked list is empty");
            return ;
         }

        if(this.head.value === data){
            this.head = this.head.next ;
            return ;
        }

        let current = this.head ;

        while(current.next){
         if(current.next.value === data){
            current.next = current.next.next ;
            return
         }

         current = current.next ;
        }
    }

    includes(data){
        if(!this.head){ 
            console.log("List is empty.");
            return;

        }

        let current = this.head ; 
        while(current){
            if(current.value === data){
                console.log("includes "+data +"? :true");
                return true;
                }

             current = current.next ;

        }
        
        console.log("includes "+data +"? :false"); 
        return false;        
    }

    insertAt(data , index){
        const newnode = new node(data) ;

        if(index === 0){
            newnode.next =this.head ;
            this.head = newnode ;
            return ;
        }

        let current = this.head ; 
        let count =0;
        while (current) {
            if(count == index-1){
                newnode.next = current.next ;
                current.next = newnode ;
                return ;
            }
            current = current.next;
            count++;
        }
          console.log(index +" --> Index greater than the length of the linked list.");

    }


}


module.exports = linkedList ;