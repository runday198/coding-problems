var isValidBST = function (root) {
  var left = isValidBSTHelper(root.left, -Number.MAX_VALUE, root.val);
  var right = isValidBSTHelper(root.right, root.val, Number.MAX_VALUE);

  return left && right;
};

function isValidBSTHelper(node, min, max) {
  if (!node) {
    return true;
  }

  console.log(node.val, min, max);

  if (node.val >= max || node.val <= min) {
    console.log("1");
    return false;
  }

  var left = isValidBSTHelper(node.left, min, node.val);
  var right = isValidBSTHelper(node.right, node.val, max);

  if (!left || !right) {
    console.log("2");
    return false;
  }

  return true;
}
