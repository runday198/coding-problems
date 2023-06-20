var longestConsecutive = function (nums) {
  var hashMap = new Map();
  var maxLen = 0;

  for (let num of nums) {
    if (hashMap.has(num)) {
      continue;
    }

    let left = hashMap.get(num - 1) || 0;
    let right = hashMap.get(num + 1) || 0;

    let length = 1 + left + right;

    hashMap.set(num, length);
    hashMap.set(num - left, length);
    hashMap.set(num + right, length);

    maxLen = Math.max(maxLen, length);
  }

  return maxLen;
};
