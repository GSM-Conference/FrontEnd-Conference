function solution(n) {
  let factorial = 1;
  for (let i = 1; i <= 10; i++) {
    if (factorial > n) return i - 2;
    else factorial *= i;
  }
  return 10;
}
