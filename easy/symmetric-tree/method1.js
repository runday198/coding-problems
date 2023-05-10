function isSymmetric(root) {
  var left = root.left;
  var right = root.right;

  return recursive(left, right);
}

function recursive(left, right) {
  if (!left && !right) {
    return true;
  }
  if (!left || !right || left.val !== right.val) {
    return false;
  }
  if (
    !recursive(left.left, right.right) ||
    !recursive(left.right, right.left)
  ) {
    return false;
  }
  return true;
}
