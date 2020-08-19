/**
 * Write a function that would perform
 * Merge Sort of the given array
 */
/**
 * 
 * @param {*} arr 
 */
const mergeSort = arr => {
    // 1. Base Case
    if(arr.length < 2) return arr
    // 2. Recursion
        // Divide and Conquer approach
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    return mergeHelper(left,right);
}
/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns {Array}
 */
const mergeHelper = (arr1,arr2) => {
        //1. use pointer to handle the traversal
        let i = 0
            ,j = 0; 
        let result = [];
        //2. Store the values in the ascending order
            while( i < arr1.length && j < arr2.length){
                if( arr1[i] < arr2[j] ){
                    result.push(arr1[i])
                    i++;
                } else {
                    result.push(arr2[j]);
                    j++;
                }
            }//end while
        //3. Store the remaining elements
            while( i < arr1.length ){
                // push the remaining items
                result.push(arr1[i])
                i++;
            }//end while
    
            while( j < arr2.length) {
                result.push(arr2[j]);
                j++;
            }//end while
    
        //4. return result
            return result;
}

console.log(mergeSort([10, 9, 8, 6, 4, 2, 1]));