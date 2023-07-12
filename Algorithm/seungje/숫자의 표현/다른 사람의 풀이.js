function solution(n) {
  var answer = 0;
  let i = 0;
  while (n > 0) {
    i++;
    if (n % i === 0) answer++;
    n -= i;
  }
  return answer;
}
