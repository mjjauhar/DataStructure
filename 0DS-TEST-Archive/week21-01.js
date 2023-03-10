// quickSort
function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}
