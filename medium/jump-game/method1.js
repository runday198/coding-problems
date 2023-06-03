function canJump(nums) {
  let lastIndex = nums.length - 1;

  for (let i = nums.length; i >= 0; i--) {
    if (i + nums[i] >= lastIndex) lastIndex = i;
  }

  return lastIndex == 0;
}
