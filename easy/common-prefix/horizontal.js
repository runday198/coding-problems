function longestCommonPrefix(strs) {
  var substring = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(substring)) {
      substring = substring.slice(0, -1);
    }
  }

  return substring;
}

console.log(test(["flower", "flow", "florian"]));
