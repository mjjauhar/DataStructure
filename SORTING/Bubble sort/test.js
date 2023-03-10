function bubbleSort(arr) {
  let swapped;
  for (var i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

let arr = [1, 23, 65, 3, 2, 1];

bubbleSort(arr);
console.log(arr);
