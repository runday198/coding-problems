function maxDepth(root) {
  if (!root) {
    return 0;
  }

  var stack = [];
  var countCache = [];
  var count = 0;
  var max = 0;

  while (root || stack.length) {
    if (root) {
      count++;
      countCache.push(count);
      stack.push(root);
      root = root.left;

      continue;
    } else if (count > max) {
      max = count;
    }
    count = countCache.pop();
    root = stack.pop().right;
  }
  return max;
}
