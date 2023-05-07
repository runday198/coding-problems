function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let temp = haystack.slice(i);

      if (temp.startsWith(needle)) {
        return i;
      }
    }
  }

  return -1;
}

console.log(strStr("mississippi", "issip"));
