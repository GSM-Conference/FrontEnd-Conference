function solution(arr, n = 0) {
  while (
    !arr.every((x) => (x >= 50 && x % 2 === 1) || (x < 50 && x % 2 === 0))
  ) {
    arr = arr.map((x) => {
      if (x >= 50 && x % 2 === 0) return x / 2;
      if (x < 50 && x % 2 === 1) return x * 2 + 1;
      return x;
    });
    n++;
  }
  return n;
}
