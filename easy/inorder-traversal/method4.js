function inorderTraversal(root) {
  var stack = [];
  var res = [];
  var curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}
