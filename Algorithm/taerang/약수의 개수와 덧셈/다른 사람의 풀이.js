function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (i === Math.floor(Math.sqrt(i)) ** 2) answer -= i;
    else answer += i;
  }
  return answer;
}
