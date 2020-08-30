class Node{
    constructor(data,next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList {
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }
//     insert the element at the end of the list
    /**
     * 
     * @param {*} data 
     * @returns {DoublyLinkedList}
     */
    push(data){
        let newNode = new Node(data);
        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;     
        return this;
    }
//     delete at the end of the list
    /**
     * @returns {Node}
     */
    pop(){
        if(!this.tail)return null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        let prevNode = this.tail.prev;
        this.tail = prevNode;

        let deletedNode = prevNode.next;  
        this.tail.next = null;
        
        deletedNode.prev = null; 
        this.length--;
        return deletedNode;
    }
// Insert at the head
    /**
     * 
     * @param {*} data 
     * @returns { Node }
     */
    unshift(data){
        let newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            // get the first element
            let firstNode = this.head;
            // set the new Node as the head
            firstNode.prev = newNode;
            newNode.next = firstNode;
            this.head = newNode
        }
        this.length++;
        return this;
    }
// Delete at the head
    /**
     * @returns { Node }
     */
    shift(){
        let deleteNode = this.head;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        }
        else{
            this.head = deleteNode.next;
            deleteNode.next = null; 
            this.head.prev = null;
        }
        this.length --;
        return deleteNode;
    }
    // Get element using the index;
    /**
     * 
     * @param {*} index 
     * @returns { Node }
     */
    get(index){
        if(index < 0 || index >= this.length) return null;
        let node;
        // Check from which point this closer
        let fromStart = index  
            ,fromEnd = this.length - index;
        index = Math.min(fromEnd,fromStart);
        // closer from end
        if(index === fromEnd){
            node = this.tail;
            for(var i = this.length - 1; i > index; i--){
                node = node.prev;
            }
            return node;
        } else { 
            node = this.head;
            for(var i = 0; i < index; i++){
                node = node.next;
            }
            return node;
        }
    }
    // Update element using the index;
    /**
     * 
     * @param {*} index 
     * @param {*} val 
     * @returns { Boolean }
     */
    set(index,val){
        let foundNode = this.get(index);
        if(!!foundNode){
            foundNode.data = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        // if 0 or this.length handle the case
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;    
        return true;
    }
    /**
     * 
     * @param {*} index 
     * @returns { Node }
     */
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length - 1 ) return this.pop();

        let prevNode = this.get(index - 1);
        let deletedNode = prevNode.next;
        prevNode.next = deletedNode.next;
        deletedNode.next.prev = prevNode;

        deletedNode.next = null, deletedNode.prev = null;
        this.length--;
        return deletedNode;
    }
    reverse(){
        let current = this.tail;
        for(var i = 0; i < this.length; i++){
            if(current){
                console.log(current.data);
                current = current.prev;    
            }
            if(!current) return "Reverse Traversal completed"
        }
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(10)
doublyLinkedList.push(20)
doublyLinkedList.push(30)
doublyLinkedList.pop();
doublyLinkedList.unshift(0);
doublyLinkedList.shift();

console.log("After all the operations");
console.log(doublyLinkedList);