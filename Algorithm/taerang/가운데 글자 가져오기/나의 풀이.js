function solution(s) {
  let answer = "";

  if (s.length % 2 == 0) {
    //짝수
    answer += s[Math.floor(s.length / 2) - 1];
    answer += s[Math.floor(s.length / 2)];
  } else {
    //홀수
    answer += s[Math.floor(s.length / 2)];
  }
  return answer;
}
