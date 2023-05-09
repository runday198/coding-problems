function merge(nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;

  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  return nums1;
}

console.log(merge([0, 0, 1, 2, 0, 0, 0, 0, 0], 4, [1, 1, 2, 3, 4], 5));
