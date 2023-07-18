function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}

function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}
