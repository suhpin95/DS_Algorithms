const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, left, right) => {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    };
    let pivot = arr[start];
    let swapIndex = start;
    for (var i = start + 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        swapIndex++;
        swap(arr, i, swapIndex);
      }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
  };
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      let pivotIndex = pivotHelper(arr, left, right);
      sort(arr, left, pivotIndex - 1);
      sort(arr, pivotIndex + 1, right);
    }
    return arr;
  };
  console.log(sort([1, 231, 321, 12, 21, 1, 2, -21]));
  