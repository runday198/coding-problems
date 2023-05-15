// Boyer-Moore algorithm

function majorityElement(nums) {
  var returnEl = nums[0];
  var count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== returnEl) {
      count--;
    } else {
      count++;
    }

    if (count === 0) {
      returnEl = nums[i];
      count = 1;
    }
  }
  return returnEl;
}
