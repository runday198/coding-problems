var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;

  let max = 0;

  while (i !== j) {
    let barHeight;
    let length = j - i;

    if (height[i] <= height[j]) {
      barHeight = height[i];
      i++;
    } else {
      barHeight = height[j];
      j--;
    }

    if (length * barHeight > max) {
      max = length * barHeight;
    }
  }

  return max;
};
