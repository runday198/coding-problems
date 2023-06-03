var maxSubArray = function (nums) {
  var maxSum = nums[0];
  var maxSumSoFar = 0;

  for (let i = 0; i < nums.length; i++) {
    maxSumSoFar += nums[i];

    if (maxSumSoFar > maxSum) {
      maxSum = maxSumSoFar;
    }

    if (maxSumSoFar < 0) {
      maxSumSoFar = 0;
    }
  }
  return maxSum;
};
