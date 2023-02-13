// heapsort
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
    leftChild = 2 * i + 1;
    rightChild = leftChild + 1;
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
