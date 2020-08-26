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
}