/**
 * Implement Tree Traversal 
 * using BST
 */
class Node {
    constructor(data, left = null, right = null){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    /**
     * 
     * @param {*} val 
     */
    insert(val){
        let node = new Node(val);
        if(!this.root){
            this.root = node;
            return this;
        }
        let current = this.root;
//         Use Iteration for insertion
        while(true){
            if(current.data === val) return undefined;
//             traverse to left
            if(val < current.data){
//                 if no child on the left
                if(!current.left){   
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if(!current.right){
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }
    /**
     * @returns {Array}
     */
    breadthFirstSearch(){
        let queue = []
            ,visitedNode = []
            ,node = this.root;

        //1. Push the entire tree into the array
        queue.push(node);

        //5. Repeat Until the queue isn't empty 
        while(queue.length){
        
            //2. Remove the data if the traversal is done
           node = queue.shift();
            //3. Push the data of the node into visitedNode
           visitedNode.push(node.data);
           
           //4. Check the child node in left & right
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        //6. Return the data         
        return visitedNode;
    }
}

let bst = new BST();
bst.insert(100);
bst.insert(50);
bst.insert(20);
bst.insert(25);
bst.insert(125);
bst.insert(110);
bst.insert(150);

console.log(bst);
console.log(bst.find(123123));
console.log(bst.find(150));