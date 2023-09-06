function solution(my_string) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (answer.indexOf(my_string[i]) === -1) {
      answer += my_string[i];
    }
  }

  return answer;
}
