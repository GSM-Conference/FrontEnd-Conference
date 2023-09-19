function solution(n) {
  let answer = 1;
  let factorial = 1;

  while (factorial <= n) {
    answer++;
    factorial *= answer;
  }

  return answer - 1;
}
