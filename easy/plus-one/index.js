function plusOne(digits) {
  recursive(digits, digits.length - 1);
  return digits;
}

function recursive(digits, index) {
  if (digits[index] === 9) {
    digits[index] = 0;
    if (index === 0) {
      digits.unshift(1);
      return;
    }
    recursive(digits, index - 1);
    return;
  } else {
    digits[index]++;
    return;
  }
}

console.log(plusOne([9, 9, 9]));
