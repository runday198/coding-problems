function reverseList(head) {
  return recursive(head);
}

function recursive(head, prev = null, curr = null) {
  if (!head) {
    return curr;
  }

  curr = head;
  head = head.next;

  curr.next = prev;
  prev = curr;

  return recursive(head, prev, curr);
}
