function solution(a, b) {
  const isOdd = (num) => num % 2 === 1;

  return isOdd(a) && isOdd(b)
    ? a ** 2 + b ** 2
    : isOdd(a) || isOdd(b)
    ? 2 * (a + b)
    : Math.abs(a - b);
}

function solution(a, b) {
  const isAOdd = a % 2 === 1;
  const isBOdd = b % 2 === 1;

  if (isAOdd && isBOdd) return Math.pow(a, 2) + Math.pow(b, 2);
  if (!isAOdd && !isBOdd) return Math.abs(a - b);
  return 2 * (a + b);
}

const solution = (a, b) =>
  a % 2 && b % 2
    ? a * a + b * b
    : a % 2 || b % 2
    ? 2 * (a + b)
    : Math.abs(a - b);
