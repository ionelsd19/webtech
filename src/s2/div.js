function checkDivisible(n, divisor) {
  // if (n % divisor) {
  //   return false;
  // } else {
  //   return true;
  // }
  return n % divisor ? false : true;
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));
