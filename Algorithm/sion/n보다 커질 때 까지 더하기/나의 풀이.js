function solution(numbers, n) {
  let sum = 0;
  numbers.forEach((v, i) => {
    if (sum > n) return sum;
    else sum += v;
  });
  return sum;
}
