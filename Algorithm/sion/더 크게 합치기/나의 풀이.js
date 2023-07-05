function solution(a, b) {
  a = a.toString();
  b = b.toString();

  return Number(a + b) > Number(b + a) ? Number(a + b) : Number(b + a);
}
