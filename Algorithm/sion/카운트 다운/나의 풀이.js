function solution(start, end) {
  return new Array(start - end + 1).fill(start).map((v, i) => v - i);
}
