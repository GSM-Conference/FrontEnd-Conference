function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}
