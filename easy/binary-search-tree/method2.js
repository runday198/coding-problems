function sortedArrayToBST(nums) {
  return recursive(0, nums.length - 1, nums);
}

function recursive(start, end, nums) {
  if (start > end) {
    return null;
  }

  var mid = Math.floor((start + end) / 2);
  var curr = new TreeNode(nums[mid]);

  curr.left = recursive(start, mid - 1, nums);
  curr.right = recursive(mid + 1, end, nums);

  return curr;
}
