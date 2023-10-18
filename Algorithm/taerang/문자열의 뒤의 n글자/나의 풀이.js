function solution(my_string, n) {
  let answer = "";

  for (let i = my_string.length - 1; i >= my_string.length - n; i--) {
    answer = my_string[i] + answer;
  }

  return answer;
}
