var threeSum = function (nums) {
  var returnArr = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let h = nums.length - 1;

    while (l < h) {
      let sum = nums[i] + nums[l] + nums[h];

      if (sum === 0) {
        returnArr.push([nums[i], nums[l], nums[h]]);

        while (nums[l] === nums[l + 1]) {
          l++;
        }
        while (nums[h] === nums[h - 1]) {
          h--;
        }
        l++;
        h--;
      } else if (sum < 0) {
        l++;
      } else {
        h--;
      }
    }
  }
  return returnArr;
};
