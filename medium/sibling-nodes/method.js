var connect = function (root) {
  var node = root;
  recursive(node, null);
  return root;
};

function recursive(node, sibling) {
  if (!node) {
    return;
  }

  if (sibling) {
    node.next = sibling;
  }

  recursive(node.right, sibling?.left);
  recursive(node.left, node.right);
}
