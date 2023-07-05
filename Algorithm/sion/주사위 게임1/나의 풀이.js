function solution(a, b) {
  let isAOdd = a % 2 !== 0;
  let isBOdd = b % 2 !== 0;

  if (isAOdd && isBOdd) return a ** 2 + b ** 2;
  else if (isAOdd || isBOdd) return 2 * (a + b);
  else if (!isAOdd && !isBOdd) return Math.abs(a - b);
}
