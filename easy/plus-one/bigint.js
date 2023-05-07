function plusOne(digits) {
  var number = BigInt(digits.join(""));
  return (++number).toString().split("");
}
