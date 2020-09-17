/** 
 * Write a function that
 * performs selection sort
*/

/**
 * 
 * @param {*} arr
 * @returns {Array} 
 */
const selection = arr => {
    let minIndex;
    // 1. Loop through array
    for (var i = 0; i < arr.length; i++) {
      minIndex = i;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
          // 2. Find the lowest index
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        //3. Swap if with the lowest value
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    // 4. return the result
    return arr;
  };
  console.log(selection([932, 123, 213, 2, 1213, 13]));
  