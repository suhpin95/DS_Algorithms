import { mergerHelper } from "./mergeHelper.js"
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

const mergeHelper = mergerHelper;

console.log(mergeSort([10, 9, 8, 6, 4, 2, 1]));
