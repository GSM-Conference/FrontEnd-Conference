function solution(n, k) {
  return Array.from({ length: n / k }).map((v, i) => (i + 1) * k);
}
