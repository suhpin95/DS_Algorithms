/**
 * This is an optimized version of the bubble sort
 */
const bubbleSort = arr => {
    // use this as a flag to break the loop
    let swaps;
    for (var i = arr.length; i > 0; i--) {
      swaps = false;
      for (var j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swaps = true;
        }
      }
    //   break if there are no swaps
      if (!swaps) break;
    }
    return arr;
  };
  
  console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
  