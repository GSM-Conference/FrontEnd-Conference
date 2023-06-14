function solution(s) {
  let answer = true;

  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      //숫자인지 판별하는 메소드이다.
      return false;
    }
  }
  return answer;
}
