var sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let currentElement = nums[i];

    while (j >= 0 && currentElement < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = currentElement;
  }

  return nums;
};
