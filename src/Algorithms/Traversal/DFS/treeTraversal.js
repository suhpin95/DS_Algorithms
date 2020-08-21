/**
 * Implemnt Tree Traversal 
 * using BST
 */
class Node {
    constructor(data, left=null, right=null) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    /**
     * 
     * @param {*} val 
     */
    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        //         Use Iteration for insertion
        while (true) {
            if (current.data === val)
                return undefined;
            //             traverse to left
            if (val < current.data) {
                //                 if no child on the left
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
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
    preOrder() {
      let current = this.root
          ,visitedNode = [];
          /**
           * 
           * @param {*} node 
           */
      function traverseHelper(node){
           //1. Traverse root
           visitedNode.push(node.data);
           //2. Traverse left
           if(node.left) traverseHelper(node.left);
           //3. Traverse right
           if(node.right) traverseHelper(node.right);
      }
      traverseHelper(current)
      return visitedNode;
    }

    postOrder(){
        let current = this.root
            ,visitedNode = [];
         function traverseHelper(node){
             //1. Traverse Left
             if(node.left) traverseHelper(node.left);
             //2. Traverse right
             if(node.right) traverseHelper(node.right);
             //3. Traverse root              
             visitedNode.push(node.data);
         }
         traverseHelper(current);
         return visitedNode;
    }

    inOrder(){
        let current = this.root
            , visitedNode = [];
        function traverseHelper(node){
            //1. Traverse left
            if(node.left) traverseHelper(node.left);
            visitedNode.push(node.data);
            if(node.right) traverseHelper(node.right);
        }
        traverseHelper(current);
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

console.log("PreOrder")
console.log(bst.preOrder());
console.log("PostOrder")
console.log(bst.postOrder());
console.log("InOrder")
console.log(bst.inOrder());