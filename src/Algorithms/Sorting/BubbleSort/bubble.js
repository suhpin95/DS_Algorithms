/**
 * Write a function
 * performed bubble sort
 */
const bubble = arr => {
    let i = 0,
      j = 0;
  
    // 1. loop through the arr
    for (i = 1; i < arr.length; i++) {
      // 2. compare the neighbouring elements
      for (j = 0; j < i; j++) {
        // 3. swap if needed
        if (arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
      // 4. continue until the end of arr
    }
    // 5. Return result
    return arr;
  };
  console.log(bubble([3, 33, 2, 2, 221, 12, 3, 123, 1]));
  