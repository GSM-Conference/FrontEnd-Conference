function solution(n) {
  return String(n)
    .split("")
    .map((v) => Math.floor(v))
    .reverse();
}
