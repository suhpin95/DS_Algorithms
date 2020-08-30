class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
//    Insert at the end
    /**
     * 
     * @param {*} data 
     * @returns { SinglyLinkedList }
     */
    push(data){
        let node = new Node(data);
        
        if(!this.tail){
            this.head = node;
            this.tail = this.head;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
//    Delete at the end
    pop(){
        if(!this.head)return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

       return current;
    }
//  Delete at the end
    shift(){
       if(!this.head) return undefined;
       
       let current = this.head;
       this.head = current.next;
       this.length--;

       if(this.length === 0){
           this.tail = null;
       }
       return current;        
    }
//  Insert at the end
    /**
     * 
     * @param {*} data 
     * @returns { SinglyLinkedList }
     */
    unshift(data){
        let newNode = new Node(data);

        if(!this.head){
             this.head = newNode;
             this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;   
        }
        this.length++;
        return this;
    }
// Get the element at a particular index 
    /**
     * 
     * @param {*} index 
     * @returns { Node }
     */
    get(index){
        if(index >= this.length || index < 0)return null;
        else{
            let current = this.head;
            for(var i = 0; i < index; i++){
                current = current.next;
            }
            return current;
        }
    }
// Update the element at a particular index 
    /**
     * 
     * @param {*} index 
     * @param {*} data 
     * @returns { Boolean }
     */
    set(index,data){
        let current = this.get(index);
        if(current){
           current.data = data;    
           return true;
        } else{
            return false;
        }
        
    }    
// Insert element at the index
    /**
     * 
     * @param {*} index 
     * @param {*} val 
     * @returns { Boolean }
     */
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        
        if(index === 0 ){
           return !!this.unshift(val);
        }
        if(index === this.length){
            return !!this.push(val);
        }
//         fetch the prev element index
        let prev = this.get(index-1);
        let newNode = new Node(val);
        
        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
        return true;
    }
//     remove at a specific index
    /**
     * 
     * @param {*} index 
     * @returns { Node }
     */
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return !!this.shift();
        if(index === this.length -  1) return !!this.pop();

//      Get Previous Node
        let prevNode = this.get(index-1);
        let deletingNode = prevNode.next;

        prevNode.next = deletingNode.next;
   
        this.length--;
        return deletingNode;
    }

    printUsingArray(){
        let result = [];
        let current = this.head
        for(var i = 0; i < this.length; i++){
            result.push(current.data)
            current = current.next;
        }
        return result;
    }

//     Reverse    
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      
      var next;
      var prev = null;
      
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
       
        prev = node;
        node = next;
      }
      return this;
    }
}