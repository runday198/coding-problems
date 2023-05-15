function reverseList(head) {
  var prev = null;
  var curr = null;
  while (head) {
    curr = head;
    head = head.next;

    curr.next = prev;
    prev = curr;
  }
  return curr;
}
