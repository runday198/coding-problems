function moveZeroes(nums) {
  var slowPointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slowPointer++] = nums[i];
      nums[i] = 0;
    }
  }
  return nums;
}

moveZeroes([0, 0, 0, 1, 23, 4]);
