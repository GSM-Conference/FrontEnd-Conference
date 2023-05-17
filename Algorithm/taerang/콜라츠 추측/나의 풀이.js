function solution(num) {
  let n = num;
  let cnt = 0;

  while (n != 1) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    cnt++;
    if (cnt >= 500) {
      return -1;
    }
  }
  return cnt;
}
