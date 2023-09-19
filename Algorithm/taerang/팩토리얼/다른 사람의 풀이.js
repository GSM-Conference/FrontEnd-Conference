function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}
