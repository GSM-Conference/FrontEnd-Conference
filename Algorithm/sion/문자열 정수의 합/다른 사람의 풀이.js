const solution = (num_str) =>
  [...num_str].reduce((acc, curr) => acc + Number(curr), 0);

function solution(num_str) {
  var answer = 0;

  num_str.split("").map((a) => (answer += Number(a)));

  return answer;
}
