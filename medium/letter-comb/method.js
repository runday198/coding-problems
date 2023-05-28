var phone = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var letterCombinations = function (digits) {
  var length = digits.length;
  if (length === 0) {
    return [];
  }
  var returnArr = [];

  function dfs(pos, string) {
    if (pos === length) {
      returnArr.push(string);
    } else {
      let chars = phone[digits[pos++]];
      for (let i = 0; i < chars.length; i++) {
        dfs(pos, string + chars[i]);
      }
    }
  }
  dfs(0, "");
  return returnArr;
};
