class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class Queue{
    constructor(){
        this.length = 0 ;
        this.first = null;
        this.last = null;
    }
    /**
     * 
     * @param {*} val 
     */
    enQueue(val){
        // Insertion at the end
        let node = new Node(val);
        if(this.length === 0 ){
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }
    deQueue(){
        // Removing from the beginning
        if(!this.first)return "Queue is Empty";

        let newFirst = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 

        this.first = this.first.next;
        this.length--;
        return newFirst;
    }
}
