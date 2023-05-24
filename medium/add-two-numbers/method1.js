function addTwoNumbers(l1, l2) {
  var head = new ListNode(0);
  var curr = head;
  var carry = 0;

  while (l1 || l2 || carry !== 0) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return head.next;
}
