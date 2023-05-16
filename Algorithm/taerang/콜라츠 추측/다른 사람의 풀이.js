function solution(num) {
  let counter = 0;
  while (num !== 1) {
    if (counter++ === 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return counter;
}
