function lengthOfLongestSubstring(s) {
  var max = 0;
  var start = 0;
  var hashMap = new Map();
  var arr = [max];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (hashMap.has(char) && hashMap.get(char) >= start) {
      start = hashMap.get(char) + 1;
      arr.push(max);
      max = i - start;
      i--;
    } else {
      hashMap.set(char, i);
      max++;
    }
  }

  return Math.max(...arr, max);
}
