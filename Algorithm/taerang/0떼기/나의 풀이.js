function solution(n_str) {
  let answer = "";

  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] === "0") {
      continue;
    } else {
      answer += n_str.substring(i);
      break;
    }
  }

  return answer;
}
