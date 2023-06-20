var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  var numSet = new Set(nums);
  var max = 0;

  for (let num of numSet) {
    if (numSet.has(num - 1)) {
      continue;
    }

    let currNum = num;
    let currMax = 1;

    while (numSet.has(currNum + 1)) {
      currNum++;
      currMax++;
    }

    max = Math.max(currMax, max);
  }

  return max;
};
