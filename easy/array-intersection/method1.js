function intersect(nums1, nums2) {
  var numMap = new Map();
  var resultArr = [];

  for (let n of nums1) {
    if (numMap.has(n)) {
      numMap.set(n, numMap.get(n) + 1);
    } else {
      numMap.set(n, 1);
    }
  }

  for (let n of nums2) {
    if (numMap.has(n) && numMap.get(n) > 0) {
      resultArr.push(n);
      numMap.set(n, numMap.get(n) - 1);
    }
  }

  return resultArr;
}
