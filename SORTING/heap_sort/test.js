// build a max heap from the given array
// remove root
// swap and heapify

function buildMaxHeap(arr) {
  let i = Math.floor(arr.length / 2 - 1);

  while (i >= 0) {
    heapify(arr, i, arr.length);
    i -= 1;
  }
}

function heapify(heap, i, max) {
  let index, leftChild, rightChild;
  while (i < max) {
    index = i;
    leftChild = i * 2 + 1;
    rightChild = i * 2 + 2;
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }
    if (rightChild < max && heap[rightChild] > heap[index]) {
      index = rightChild;
    }
    if (i === index) {
      return;
    }
    swap(heap, i, index);
    i = index;
  }
}

function swap(arr, first, last) {
  let temp = arr[first];
  arr[first] = arr[last];
  arr[last] = temp;
}

function heapSort(arr) {
  buildMaxHeap(arr);
  let lastElement = arr.length - 1;
  while (lastElement > 0) {
    swap(arr, 0, lastElement);
    heapify(arr, 0, lastElement);
    lastElement -= 1;
  }
  return arr; 
}
