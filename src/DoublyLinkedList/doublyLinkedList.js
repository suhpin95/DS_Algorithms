class Node{
    constructor(data,next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList{
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }
//     insert the element at the end of the list
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
    pop(){
        if(!this.tail) return null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        let prevNode = this.tail.prev;
        this.tail = prevNode;
        this.tail.next = null; 

        let deletedNode = prevNode.next;
        
        this.length--;
        return deletedNode; 
    }
// Insert at the head
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
    shift(){
        let deleteNode = this.head;
        if(!deleteNode) return null;
        else{
            this.head = deleteNode.next;
            deleteNode.next = null; 
        }
        this.length --;
        return deleteNode;
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