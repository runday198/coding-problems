function getIntersectionNode(headA, headB) {
  var tempA = headA;
  var tempB = headB;

  var countA = 0;
  var countB = 0;

  while (true) {
    countA++;
    if (tempA.next) {
      tempA = tempA.next;
    } else {
      break;
    }
  }

  while (true) {
    countB++;
    if (tempB.next) {
      tempB = tempB.next;
    } else {
      break;
    }
  }

  if (tempA !== tempB) {
    return null;
  }

  if (countA > countB) {
    let diff = countA - countB;
    let index = 0;

    while (index < diff) {
      headA = headA.next;
      index++;
    }
  } else {
    let diff = countB - countA;
    let index = 0;

    while (index < diff) {
      headB = headB.next;
      index++;
    }
  }

  while (true) {
    if (headA === headB) {
      return headA;
    } else {
      headA = headA.next;
      headB = headB.next;
    }
  }
}
