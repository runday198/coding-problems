var longestPalindrome = function (s) {
  var maxPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    let char1 = aroundCenter(s, i, i);
    let char2 = aroundCenter(s, i, i + 1);

    if (char2.length > char1.length) {
      char1 = char2;
    }

    if (char1.length > maxPalindrome.length) {
      maxPalindrome = char1;
    }
  }

  return maxPalindrome;
};

function aroundCenter(s, x, y) {
  var char = "";

  while (x >= 0 && y < s.length && s[x] === s[y]) {
    char = s[x] + char + s[y];
    if (x === y) {
      char = s[x];
    }

    x--;
    y++;
  }
  return char;
}
