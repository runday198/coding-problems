function singleNumber(nums) {
  var returnNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    returnNum = returnNum ^ nums[i];
  }
  return returnNum;
}
