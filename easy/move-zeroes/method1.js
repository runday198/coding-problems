function moveZeroes(nums) {
  var slowPointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[slowPointer++] = nums[i];
    }
  }

  for (let i = slowPointer; i < nums.length; i++) {
    nums[i] = 0;
  }

  console.log(nums);
}

moveZeroes([0, 0, 1, 2, 3]);
