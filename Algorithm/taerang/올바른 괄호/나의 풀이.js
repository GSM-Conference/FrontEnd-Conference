function solution(s) {
  let answer = true;
  let openCount = 0;
  let closeCount = 0;

  if (s.length % 2 !== 0) {
    // 괄호가 홀수이면 바로 false.
    answer = false;
    return answer;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount++;
    } else {
      closeCount++;

      if (closeCount > openCount) {
        answer = false;
        break;
      }
    }
  }

  if (openCount !== closeCount) {
    answer = false;
  }

  return answer;
}
