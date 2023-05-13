function isPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/gi, "");
  s = s.toLowerCase();
  return s === s.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
