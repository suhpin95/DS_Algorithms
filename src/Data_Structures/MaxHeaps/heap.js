class Heap{
    constructor(){
      this.values = [];
   }

   insert(val){
       this.values.push(val);
       this.bubbleUp();
   }
   
   bubbleUp(){
       let childIndex = this.values.length - 1 ;
       const childVal = this.values[childIndex];

       // repeat until the index > 0
       while(childIndex > 0){
           let parentIndex = Math.floor((childIndex - 1) / 2 );
           let parentVal = this.values[parentIndex];
           
            // compare the child and parent
           if(parentVal >= childVal) break;
           
           // swap to the right position
           this.values[parentIndex] = childVal;
           this.values[childIndex] = parentVal;
           
           // change the index
           childIndex = parentIndex;
       }
   }

   extractMax(){
    // swap the first and last element
    let max = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0 ){
        this.values[0] = end;
    }
    // re-adjust so that the property of the heap is maintained
    this.trikleDown();
    return max;
   }

   trikleDown(){
       let index = 0;
        const length = this.values.length;
        const parent = this.values[0];
        while(true){
            let leftIndex =  2 * index + 1;
            let rightIndex = 2 * index + 2;
            // Not initalizing so that we need not have to face with out of bounds exception
            let leftChild ,rightChild
            let swap = null;
            if(leftIndex < length){
                leftChild = this.values[leftIndex];
                if(parent < leftChild){
                    swap = leftIndex;
                }
            }
            if(rightIndex < leftIndex){
                rightChild = this.values[rightIndex];
                // checks the case where the parent is less than left and right
                // and right is the greatest amongst the two
                if( 
                    (swap === null && parent < rightChild) || 
                    (swap !== null && leftChild < rightChild)
                  )
                {
                    swap = rightIndex;
                }
            }
            // break if no swaps will be performed
            if(swap === null)break;
            this.values[index] = this.values[swap];
            this.values[swap] = parent;
            index = swap;
        }
   }
}