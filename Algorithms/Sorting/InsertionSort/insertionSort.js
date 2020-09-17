/**
 *  Write a function that
 *  performs insertion sort
 */

/**
 * 
 * @param {*} arr 
 * @returns {Array}
 */
const insertion = arr => {
    for (var i = arr.length - 1; i >= 0; i--) {
      // 1. start from the last element
      let currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        // 2. Shift the elements
        arr[j + 1] = arr[j];
      }
      // 3. Store the element that's remaning after shifting
      arr[j + 1] = currentVal;
    }
    // 4. return arr
    return arr;
  };
  console.log(insertion([32, 123, 12, 231, 1]));
  