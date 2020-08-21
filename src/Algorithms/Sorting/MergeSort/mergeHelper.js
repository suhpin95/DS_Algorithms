/**
 * Write a function to 
 * merge a sorted list
*/

/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns {Array}
 */
export const mergerHelper = (arr1, arr2) =>{
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

// console.log(mergerHelper([1, 2, 12, 122], [2, 10, 99, 100]));