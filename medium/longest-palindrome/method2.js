var longestPalindrome = function (s) {
  var lps = [];
  // creating a two dimensional array and filling the main diagonal with 1s
  var dpArr = [];
  for (let i = 0; i < s.length; i++) {
    dpArr[i] = [];
    for (let j = 0; j < s.length; j++) {
      dpArr[i][j] = 0;
      if (i === j) {
        dpArr[i][j] = 1;
        lps = [i, j];
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      dpArr[i][i + 1] = 1;
      lps = [i, i + 1];
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      if (s[i] === s[j] && dpArr[i + 1][j - 1] === 1) {
        dpArr[i][j] = 1;
        if (lps[1] - lps[0] + 1 < j - i + 1) {
          lps = [i, j];
        }
      }
    }
  }

  return s.substring(lps[0], lps[1] + 1);
};
