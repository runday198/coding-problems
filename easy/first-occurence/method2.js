function strStr(haystack, needle) {
  var needleLen = needle.length;
  var haystackLen = haystack.length;

  for (let i = 0; i <= haystackLen - needleLen; i++) {
    for (let j = 0; j < haystackLen; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }

      if (j === needleLen - 1) {
        return i;
      }
    }
  }
  return -1;
}

console.log(strStr("butsad", "sad"));
