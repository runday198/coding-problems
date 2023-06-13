var sortColors = function (nums) {
  return mergeSort(0, nums.length - 1, nums);
};

function mergeSort(start, end, arr) {
  if (start >= end) {
    return [arr[start]];
  }

  var mid = Math.floor((start + end) / 2);

  mergeSort(start, mid, arr);
  mergeSort(mid + 1, end, arr);

  return merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let i = start;
  let j = mid + 1;

  if (arr[mid] <= arr[j]) {
    return;
  }

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      let val = arr[j];
      let index = j;

      while (index !== i) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[i] = val;

      i++;
      j++;
      mid++;
    }
  }
}
