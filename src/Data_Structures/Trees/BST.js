/**
 * Implemnt BST using 
 * Iteration as well as Recursion Logic
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
     * 
     * @param {*} val 
     */
    find(val){
        if(!this.root)return "Empty Tree"
        let current = this.root;
        let flag = false;
        //if root is the value
        if(current.data === val) return true;
        while(current && !flag){
            if(val < current.data){
            // traverse left
                current = current.left;
            } else if(val > current.data){ 
            // traverse right
                current = current.right;
            } else{
                flag = true;
            }
        }
//      Edge Case
        if(!flag)return false;
        return current;
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