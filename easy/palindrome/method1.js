function isPalindrome(s) {
  // turn lowercase
  // remove all non-alphanumeric
  // turn into an array, reverse it and join it back
  var startIndex = 0;
  var endIndex = s.length - 1;
  var alphaNumeric = /[A-Za-z0-9]/;

  while (startIndex < endIndex) {
    if (!s[startIndex].match(alphaNumeric)) {
      startIndex++;

      continue;
    } else if (!s[endIndex].match(alphaNumeric)) {
      endIndex--;

      continue;
    }

    if (s[startIndex].toLowerCase() !== s[endIndex].toLowerCase()) {
      return false;
    }

    startIndex++;
    endIndex--;
  }
  return true;
}
