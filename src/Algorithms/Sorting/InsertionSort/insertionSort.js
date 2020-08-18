
const insertion = arr => {
    for (var i = arr.length - 1; i >= 0; i--) {
      let currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    // 3. return arr
    return arr;
  };
  console.log(insertion([32, 123, 12, 231, 1]));
  