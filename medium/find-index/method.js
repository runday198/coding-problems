var searchRange = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;

  var firstIndex;
  var lastIndex;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target && nums[mid - 1] !== target) {
      firstIndex = mid;
      break;
    }

    if (target <= nums[mid]) {
      high = mid - 1;
      continue;
    } else {
      low = mid + 1;
      continue;
    }
  }

  low = firstIndex || 0;
  high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target && nums[mid + 1] !== target) {
      lastIndex = mid;
      break;
    }

    if (target >= nums[mid]) {
      low = mid + 1;
      continue;
    } else {
      high = mid - 1;
      continue;
    }
  }

  return [firstIndex ?? -1, lastIndex ?? -1];
};
