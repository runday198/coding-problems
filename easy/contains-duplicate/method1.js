function containsDuplicate(nums) {
  var valueSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (valueSet.has(nums[i])) {
      return true;
    }

    valueSet.add(nums[i]);
  }
  return false;
}
