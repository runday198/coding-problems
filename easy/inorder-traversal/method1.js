function inorderTraversal(root) {
  var returnArr = [];
  recursive(root, returnArr);
  return returnArr;
}

function recursive(root, returnArr) {
  if (!root) {
    return;
  }
  recursive(root.left);
  returnArr.push(root.val);
  recursive(root.right);
}
