function solution(n) {
  const answer = Math.pow(Math.sqrt(n) + 1, 2);
  return answer % 1 === 0 ? answer : -1;
}
