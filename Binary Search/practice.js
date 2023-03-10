// must be sorted array
// only search the side it can exist

function binarySearch(arr, target, first, last) {
  if (first > last) {
    return "Not found";
  }

  let mid = Math.floor((first + last) / 2);
  if (arr[mid] === target) {
    return `Value at ${mid}`;
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, first, mid-1);
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid+1, last);
  }
}

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let c = binarySearch(x,7, 0, x.length-1);
console.log(c);
