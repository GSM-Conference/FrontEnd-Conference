function solution(my_string) {
  let answer = Array(52).fill(0);

  my_string.split("").map((v) => {
    if (v === v.toLowerCase()) {
      answer[v.charCodeAt() - 71] += 1;
    } else {
      answer[v.charCodeAt() - 65] += 1;
    }
  });

  return answer;
}
