const solution = (a, b, c) => {
  const set = new Set([a, b, c]);
  switch ([...set].length) {
    case 1:
      return calculate([a, b, c], 3);
    case 2:
      return calculate([a, b, c], 2);
    case 3:
      return calculate([a, b, c]);
  }
};

const calculate = (inc, n = 1) => {
  const [a, b, c] = inc;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
  }

  return result;
};

function solution(a, b, c) {
  let sum1 = a + b + c;
  let sum2 = a * a + b * b + c * c;
  let sum3 = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) return sum1 * sum2 * sum3;
  else if (a === b || a === c || b === c) return sum1 * sum2;
  else return sum1;
}
