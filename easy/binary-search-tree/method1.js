function sortedArrayToBST(nums) {
  var start = 0;
  var middle = Math.floor((nums.length - 1) / 2);
  var end = nums.length - 1;
  var prevIndexes = new Set();

  nums[middle] = new TreeNode(nums[middle]);

  recursive(start, middle, end, nums, prevIndexes);
  return nums[middle];
}

function recursive(s, m, e, nums, prevIndexes) {
  if (s >= e) {
    return null;
  }
  if (prevIndexes.has(m)) {
    return null;
  } else {
    prevIndexes.add(m);
  }

  let root = nums[m];

  let leftMiddle = Math.floor(m / 2);
  let rightMiddle = Math.floor(e + m / 2);

  root.left = recursive(s, leftMiddle, m, nums);
  root.right = recursive(m, rightMiddle, e, nums);
}
