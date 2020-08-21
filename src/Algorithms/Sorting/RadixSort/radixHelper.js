/**
 * Write a function that would
 * 1. calculate the biggest number
 * of digits entered
 * 2. calculate the function that would
 * be useful in placing the number
 * in bucket
 */

 /**
  * 
  * @param {*} num 
  * @returns { Number }
  */
export const digitCount = num => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/**
 * 
 * @param {*} num 
 * @param {*} i 
 * @returns { Number }
 */
export const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

/**
 * 
 * @param {*} nums 
 * @returns { Number }
 */
export const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}