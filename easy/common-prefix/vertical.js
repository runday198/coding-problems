function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0 || strs[0] === "") {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j] === "") {
        return "";
      }
      if (strs[j].length === i || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

console.log(longestCommonPrefix(["flower"]));
