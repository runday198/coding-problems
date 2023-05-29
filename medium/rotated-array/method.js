var search = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[low]) {
      if (target < nums[mid] && target >= nums[low]) {
        high = mid - 1;
        continue;
      } else {
        low = mid + 1;
        continue;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
        continue;
      } else {
        high = mid - 1;
        continue;
      }
    }
  }
  return -1;
};
