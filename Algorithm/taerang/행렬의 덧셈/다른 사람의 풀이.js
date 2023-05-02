function solution(absolutes, signs) {
  return absolutes.reduce((acc, v, i) => (acc += v * (signs[i] ? 1 : -1)), 0);
}
