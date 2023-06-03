var canJump = function (nums) {
  var arr = Array(nums.length);
  arr[0] = true;
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] === true) {
      let jumpLength = nums[i];
      for (let j = 1; j <= jumpLength; j++) {
        arr[i + j] = true;
      }
    }
  }
  return arr[nums.length - 1] || false;
};
