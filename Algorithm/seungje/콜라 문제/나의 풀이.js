function solution(a, b, n) {
  let cnt = 0;
  const length = n;
  for (let i = 0; i < length && n >= a; i++) {
    cnt += Math.floor(n / a) * b;
    n = (n % a) + Math.floor(n / a) * b;
  }
  return cnt;
}
