function solution(s) {
  s = [...s].sort().join("");
  let answer = s;
  for (let i = 0; i < s.length; i++) {
    let target = s[i];

    if (target === s[i + 1]) {
      answer = answer.replaceAll(target, "");
      console.log(answer);
    }
  }
  return answer;
}
