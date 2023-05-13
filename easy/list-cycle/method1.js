function hasCycle(head) {
  if (!head) {
    return false;
  }
  return recursive(head);
}

function recursive(node) {
  if (!node) {
    return false;
  } else if (node.hasPassed) {
    return true;
  }

  node.hasPassed = true;
  return recursive(node.next);
}
