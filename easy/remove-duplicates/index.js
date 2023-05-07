function removeDuplicates(nums) {
  var prevEl = -101;
  var duplicateIndex = [];
  var count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === prevEl) {
      duplicateIndex.push(i);
    } else {
      prevEl = nums[i];
      if (duplicateIndex.length !== 0) {
        nums[duplicateIndex.shift()] = nums[i];
        duplicateIndex.push(i);
      }
      count++;
    }
  }
  return count;
}

console.log(removeDuplicates([1, 1, 1, 3, 4, 5, 6]));
