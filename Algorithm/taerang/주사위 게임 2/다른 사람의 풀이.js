function solution(a, b, c) {
  const cnt = new Set([a, b, c]).size;
  if (cnt === 3) return a + b + c;
  if (cnt === 2) return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
}
