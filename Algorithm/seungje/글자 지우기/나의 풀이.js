function solution(my_string, indices) {
  let answer = my_string.split("").filter((v, i) => !indices.includes(i));
  return answer.join("");
}
