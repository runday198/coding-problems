var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  var stack = [[root, 1]];
  var max = 0;

  while (stack.length) {
    var [node, depth] = stack.pop();
    max = Math.max(max, depth);
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }
  }

  return max;
};
