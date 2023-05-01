function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) {
    return "";
  }
  return checkCommonPrefix(strs, 0, strs.length - 1);
}

function checkCommonPrefix(strs, start, end) {
  if (start === end) {
    return strs[start];
  }
  var mid = Math.floor((start + end) / 2);

  var leftSide = checkCommonPrefix(strs, start, mid);
  var rightSide = checkCommonPrefix(strs, mid + 1, end);

  if (leftSide === rightSide) {
    return leftSide;
  }

  return checkPrefix(leftSide, rightSide);
}

function checkPrefix(str1, str2) {
  var minLength = Math.min(str1.length, str2.length);
  var commonSubstr = "";
  for (let i = 0; i < minLength; i++) {
    if (str1[i] === str2[i]) {
      commonSubstr += str1[i];
    } else {
      return commonSubstr;
    }
  }
  return commonSubstr;
}

console.log(longestCommonPrefix([]));
