function containsDuplicate(nums) {
  nums = nums.sort();
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev) {
      return true;
    }
    prev = nums[i];
  }
  return false;
}
