import { pivotHelper } from "./pivotHelper.js";

/**
 * 
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right
 * @returns { Array } 
 */
  const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      let pivotIndex = pivotHelper(arr, left, right);      
      // divide the array into 2 parts
      // repeat the process
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  };
  console.log(quickSort([1, 231, 321, 12, 21, 1, 2, -21]));
  