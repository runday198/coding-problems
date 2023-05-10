function isSymmetric(root) {
  var leftStack = [];
  var rightStack = [];
  var left = root.left;
  var right = root.right;

  while (leftStack.length || rightStack.length || left || right) {
    if (!right && !left) {
      left = leftStack.pop().right;
      right = rightStack.pop().left;

      continue;
    }
    if (!right || !left || left.val !== right.val) {
      return false;
    }
    leftStack.push(left);
    rightStack.push(right);

    left = left.left;
    right = right.right;
  }
  return true;
}
