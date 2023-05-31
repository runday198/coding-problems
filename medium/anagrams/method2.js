// Very slow, method1 is better

var groupAnagrams = function (strs) {
  if (strs.length <= 1) {
    return [strs];
  }
  var result = [];
  var hashMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    let charArr = Array(26).fill(0);
    let string = strs[i];

    for (let j = 0; j < string.length; j++) {
      charArr[string.charCodeAt(j) - 97]++;
    }

    let hash = "";
    for (let k = 0; k < charArr.length; k++) {
      hash += "#";
      hash += `${charArr[k]}`;
    }

    if (hashMap.has(hash)) {
      let arr = hashMap.get(hash);
      arr.push(string);
      hashMap.set(hash, arr);
    } else {
      hashMap.set(hash, [string]);
    }
  }

  hashMap.forEach((value, key) => {
    result.push(value);
  });
  return result;
};
