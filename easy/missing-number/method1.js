function missingNumber(nums) {
  var n = nums.length;
  var arrSum = nums.reduce((prevValue, item) => {
    return prevValue + item;
  });

  var sumOfNElements = (n * (n + 1)) / 2;

  return sumOfNElements - arrSum;
}

missingNumber([0, 1, 2, 3, 4]);
