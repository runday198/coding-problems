// iterate over the array, then do a nested iteration from the index you are at in the array and sum the integers, if they match use break to break out of both loops.

// Performance:
// time complexity of O(n^2)
// space comlexity of O(1)

var twoSum = function (nums, target) {
  var a;
  var b;
  for (let i = 0; i < nums.length; i++) {
    let hasFound = false;
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        a = i;
        b = j;
        hasFound = true;
        break;
      }
    }
    if (hasFound) {
      break;
    }
  }
  return [a, b];
};
