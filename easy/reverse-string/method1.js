function reverseString(s) {
  var length = s.length;
  for (let i = 0; i < s.length; i++) {
    if (length - 1 - i < i) {
      return s;
    }
    let temp = s[i];
    s[i] = s[length - 1 - i];
    s[length - 1 - i] = temp;
  }
}
