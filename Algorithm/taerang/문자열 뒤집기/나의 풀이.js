function solution(my_string, s, e) {
  let answer = "";
  let result = "";
  let first = "";

  answer += my_string.slice(0, s);
  result += my_string.slice(s, e + 1);
  result = result.split("").reverse().join("");
  first += my_string.slice(e + 1, my_string.length);

  answer = answer + result + first;
  console.log(answer);

  return answer;
}
