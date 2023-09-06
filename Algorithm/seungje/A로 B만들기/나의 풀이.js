function solution(before, after) {
  let answer = after;
  before.split("").forEach((v, i) => (answer = answer.replace(v, "")));
  return answer.length === 0 ? 1 : 0;
}
