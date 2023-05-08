function mySqrt(x) {
  var start = 0;
  var end = x;
  var mid;

  while (start < end) {
    var mid = Math.floor((start + end) / 2);

    if (mid ** 2 <= x && (mid + 1) ** 2 > x) {
      return mid;
    } else if (mid ** 2 > x) {
      end = mid;
    } else {
      start = mid;
    }
  }
}

console.log(mySqrt(8));
