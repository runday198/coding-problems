function getIntersectionNode(headA, headB) {
  var tempA = headA;
  var tempB = headB;

  while (tempA !== tempB) {
    tempA = !tempA ? headB : tempA.next;
    tempB = !tempB ? headA : tempB.next;
  }

  return tempA;
}
