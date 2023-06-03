var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    if (canReach(i, nums)) {
      nums[i] = true;
    } else {
      nums[i] = false;
    }
  }
  console.log(nums);
  return nums[0];
};

function canReach(i, nums) {
  for (let j = 0; j <= nums[i]; j++) {
    if (i + j === nums.length - 1) {
      return true;
    } else if (nums[i + j] === true) {
      return true;
    }
  }
  return false;
}
