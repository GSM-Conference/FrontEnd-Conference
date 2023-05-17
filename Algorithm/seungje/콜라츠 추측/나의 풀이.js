function solution(num) {
  if (num === 1) return 0;
  let cnt = 0;
  let n = num;
  while (n !== 1 && cnt++ < 500) n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  return cnt >= 500 ? -1 : cnt;
}
