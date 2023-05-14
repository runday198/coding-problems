function majorityElement(nums) {
  var temp = nums.sort();

  return temp[Math.floor(temp.length / 2)];
}
