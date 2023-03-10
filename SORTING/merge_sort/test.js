function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let joinedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) joinedArr.push(arr1.shift());
    else joinedArr.push(arr2.shift());
  }
  return [...joinedArr, ...arr1, ...arr2];
}
