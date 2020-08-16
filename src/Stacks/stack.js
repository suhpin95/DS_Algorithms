class Node{
    constructor(data , next = null){
        this.data = data;
        this.next = next; 
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.last = node;
            this.first = node;
        } else{
            let current = this.last;
            current.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            this.first = null;
            this.last = null;
            return "Stack is Empty";
        }
        let prevNode = this.first;
        let newLast = prevNode;
        while(prevNode.next){
            newLast = prevNode;
            prevNode = prevNode.next;
        }

        newLast.next = null;
        this.last = newLast;
        
        this.length--;
        return prevNode;
    }
}
let stack = new Stack();
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());