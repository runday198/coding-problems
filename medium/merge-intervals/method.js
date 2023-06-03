var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  var result = [];

  var prevArr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (prevArr[1] >= intervals[i][0]) {
      prevArr = [prevArr[0], Math.max(intervals[i][1], prevArr[1])];
    } else {
      result.push(prevArr);
      prevArr = intervals[i];
    }
  }
  result.push(prevArr);
  return result;
};
