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
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
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