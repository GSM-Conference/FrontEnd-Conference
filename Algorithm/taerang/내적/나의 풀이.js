function solution(a, b) {
  let answer = 0;

  for (let i = 0; a.length > i; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
