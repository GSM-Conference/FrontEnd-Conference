function solution(my_string, overwrite_string, s) {
  let answer = "";
  answer +=
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length);
  return answer;
}
