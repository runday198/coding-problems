var isValidBST = function (root) {
  var left = isValidBSTHelper(root.left, -Number.MAX_VALUE, root.val);
  var right = isValidBSTHelper(root.right, root.val, Number.MAX_VALUE);

  return left && right;
};

function isValidBSTHelper(node, min, max) {
  if (!node) {
    return true;
  }

  if (node.val >= max || node.val <= min) {
    return false;
  }

  var left = isValidBSTHelper(node.left, min, node.val);
  var right = isValidBSTHelper(node.right, node.val, max);

  if (!left || !right) {
    return false;
  }

  return true;
}
