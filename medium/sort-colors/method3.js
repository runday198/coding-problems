var sortColors = function (nums) {
  var hasSwapped = false;

  do {
    hasSwapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        hasSwapped = true;
      }
    }
  } while (hasSwapped !== false);

  return nums;
};
