function isValid(s) {
  var prevStr = "";
  var count = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    switch (s[i]) {
      case "(":
        count++;
        prevStr += "(";
        break;
      case "{":
        count++;
        prevStr += "{";
        break;
      case "[":
        count++;
        prevStr += "[";
        break;
      case ")":
        if (prevStr[prevStr.length - 1] !== "(") {
          return false;
        }
        count--;
        prevStr = prevStr.slice(0, -1);
        break;
      case "}":
        if (prevStr[prevStr.length - 1] !== "{") {
          return false;
        }
        count--;
        prevStr = prevStr.slice(0, -1);
        break;
      case "]":
        if (prevStr[prevStr.length - 1] !== "[") {
          return false;
        }
        count--;
        prevStr = prevStr.slice(0, -1);
        break;
    }
  }
  if (count !== 0) {
    return false;
  }
  return true;
}

console.log(isValid(")([])"));
