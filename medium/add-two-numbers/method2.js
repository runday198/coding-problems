var addTwoNumbers = function (l1, l2) {
  return recursive(l1, l2, 0);
};

function recursive(l1, l2, carry) {
  if (!l1 && !l2 && carry === 0) {
    return null;
  }

  let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

  carry = Math.floor(sum / 10);
  let node = new ListNode(sum % 10);
  node.next = recursive(l1 ? l1.next : null, l2 ? l2.next : null, carry);
  return node;
}
