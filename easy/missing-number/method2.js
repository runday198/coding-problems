function missingNumber(nums) {
  var missingNum = null;

  for (let i = 0; i < nums.length; i++) {
    missingNum += nums[i] ^ i;
  }

  return missingNum ^ 0;
}
