function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0 || strs[0] === "") {
    return "";
  }

  var minLength = Number.MAX_VALUE;
  for (let str of strs) {
    if (str.length < minLength) {
      minLength = str.length;
    }
  }

  var low = 0;
  var high = minLength - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (isCommonPrefix(strs, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].slice(0, Math.floor((high + low) / 2));
}

function isCommonPrefix(strs, length) {
  var substr = strs[0].slice(0, length);

  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(substr)) {
      return false;
    }
  }
  return true;
}

console.log(longestCommonPrefix(["flower", "flow", "flight", "flier"]));
