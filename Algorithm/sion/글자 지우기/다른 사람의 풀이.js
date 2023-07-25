function solution(m, a) {
  var answer = "";

  for (let i = 0; i < m.length; i++) {
    if (!a.includes(i)) {
      answer += m[i];
    }
  }

  return answer;
}
